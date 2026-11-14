"""Rapid-fire Gemini voice requests (like a tester asking "repeat that" several times) — checks quota/rate limits and the fallback model."""
import asyncio, subprocess, sys, os
from playwright.async_api import async_playwright
async def main():
    srv = subprocess.Popen([sys.executable, '-m', 'http.server', '8776'], cwd=os.environ.get('GITHUB_WORKSPACE', '.'), stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    await asyncio.sleep(1)
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--no-sandbox', '--autoplay-policy=no-user-gesture-required'])
        pg = await b.new_page()
        pg.on('console', lambda m: print('console:', m.text[:220]) if 'voice' in m.text else None)
        await pg.add_init_script("localStorage.setItem('ip.terms', JSON.stringify({v:'2026-11-13'})); localStorage.setItem('ip.settings', JSON.stringify({introSound:false}));")
        await pg.goto('http://localhost:8776/index.html'); await asyncio.sleep(3)
        await pg.evaluate("gemReady()"); await asyncio.sleep(2)
        for m in ['gemini-3.8-flash-tts', 'gemini-2.5-flash-preview-tts']:
            for i in range(6):
                r = await pg.evaluate("""async m => { const t0 = performance.now(); try { const a = await GeminiLive.speech(Object.assign(gemOpts(), {ttsModel: m}), 'Sure, let me repeat that. Tell me about a time you shortened the month-end close.', 'Aoede'); return a ? 'OK ' + Math.round(performance.now()-t0) + 'ms ' + a.mime : 'NO AUDIO' } catch (e) { return 'ERR ' + (e.message||e).slice(0,240) } }""", m)
                print('TTS', m, i, '->', r)
        for i in range(4):
            r = await pg.evaluate("""async () => { const t0 = performance.now(); const a = await gemVoice('Tell me about a time you shortened the month-end close.', 'female'); return a ? 'gemVoice OK ' + Math.round(performance.now()-t0) + 'ms ' + a.mime : 'gemVoice NULL (robot fallback)' }""")
            print(i, r)
        r = await pg.evaluate("""async () => { const a = await gemVoice('Hello there.', 'male'); if (!a) return 'no audio'; const t0 = performance.now(); await playGemAudio(a); return 'played ' + Math.round(performance.now()-t0) + 'ms' }""")
        print('playGemAudio ->', r)
        await b.close()
    srv.terminate()
asyncio.run(main())
