"""Live Gemini interviewer end-to-end test (runs in GitHub Actions: real network, fake mic playing a spoken answer)."""
import asyncio, subprocess, sys, os
from playwright.async_api import async_playwright
async def main():
    srv = subprocess.Popen([sys.executable, '-m', 'http.server', '8774'], cwd=os.environ.get('GITHUB_WORKSPACE', '.'), stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    await asyncio.sleep(1)
    px = os.environ.get('HTTPS_PROXY') or os.environ.get('https_proxy')
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--no-sandbox','--use-fake-device-for-media-stream','--use-fake-ui-for-media-stream','--use-file-for-fake-audio-capture=' + os.environ.get('VOICE_WAV', '') ,'--autoplay-policy=no-user-gesture-required','--ignore-certificate-errors'],
                                    )
        pg = await b.new_page(viewport={'width': 390, 'height': 844}); errs=[]; cons=[]
        pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: cons.append(m.text[:220]))
        await pg.add_init_script("localStorage.setItem('ip.terms', JSON.stringify({v:'2026-10-24'})); localStorage.setItem('ip.settings', JSON.stringify({introSound:false}));")
        await pg.goto('http://localhost:8774/index.html'); await asyncio.sleep(3.5)
        await pg.evaluate("PAY.testPass = true")
        if os.environ.get("LIVE_MODEL"): await pg.evaluate("m => { GEM.model = m }", os.environ["LIVE_MODEL"])
        print("model under test:", await pg.evaluate("GEM.model"))
        await pg.evaluate("go('ai/ora-fc-fin')"); await asyncio.sleep(1.2)
        await pg.evaluate("document.querySelector('.screen:last-child #startG').click()"); await asyncio.sleep(75)
        print('console:', [c for c in cons if 'favicon' not in c][:10])
        try:
            w = await pg.evaluate("GeminiLive.write(gemOpts(), 'Say OK').then(t => 'TEXT-OK: ' + t).catch(e => 'TEXT-ERR: ' + (e && (e.message || e.code)))")
        except Exception as e: w = 'eval failed ' + str(e)
        print('text model:', str(w)[:600])
        print('bubbles:', await pg.evaluate("[...document.querySelectorAll('.screen:last-child .chat .msg')].map(m => m.className.replace('msg ','') + ': ' + m.innerText.slice(0,140))"))
        print('state:', await pg.evaluate("(document.querySelector('.screen:last-child #lstate')||{}).textContent"))
        print('chat:', (await pg.evaluate("document.querySelector('.screen:last-child .chat').innerText"))[:500])
        await pg.screenshot(path='live-real.png')
        await pg.evaluate("document.querySelector('.screen:last-child #end') && document.querySelector('.screen:last-child #end').click()"); await asyncio.sleep(60)
        print('report:', (await pg.evaluate("(([...document.querySelectorAll('.screen:last-child .msg.ai')].pop())||{innerText:''}).innerText"))[:700])
        print('model answers shown:', await pg.evaluate("document.querySelectorAll('.screen:last-child .mq').length"))
        await pg.screenshot(path='live-report.png', full_page=True)
        print('errors', errs); print('console', [c for c in cons if 'favicon' not in c][:6])
        await b.close()
    srv.terminate()
asyncio.run(main())
