"""Probe which Gemini models work for this project: text, audio understanding, speech (TTS)."""
import asyncio, subprocess, sys, os, base64, json
from playwright.async_api import async_playwright
async def main():
    srv = subprocess.Popen([sys.executable, '-m', 'http.server', '8775'], cwd=os.environ.get('GITHUB_WORKSPACE', '.'), stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    await asyncio.sleep(1)
    wav = base64.b64encode(open('/tmp/a.wav','rb').read()).decode()
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--no-sandbox'])
        pg = await b.new_page()
        await pg.add_init_script("localStorage.setItem('ip.terms', JSON.stringify({v:'2026-10-24'})); localStorage.setItem('ip.settings', JSON.stringify({introSound:false}));")
        await pg.goto('http://localhost:8775/index.html'); await asyncio.sleep(3)
        await pg.evaluate("gemReady()"); await asyncio.sleep(2)
        for tm in ['gemini-3.8-flash', 'gemini-3.5-flash', 'gemini-3-flash-preview', 'gemini-3.8-flash-lite', 'gemini-3.5-flash-lite', 'gemini-flash-latest', 'gemini-flash-lite-latest']:
            r = await pg.evaluate("""async m => { const t0 = performance.now(); try { const r = await GeminiLive.turn(Object.assign(gemOpts(), {textModel: m}), {system: 'You are a job interviewer. One short sentence.', history: [], audio: arguments[1], mime: 'audio/wav'}); return 'OK ' + Math.round(performance.now()-t0) + 'ms HEARD=' + r.heard.slice(0,120) + ' | SAY=' + r.text.slice(0,120) } catch (e) { return 'ERR ' + (e.message||e).slice(0,200) } }""".replace('arguments[1]', json.dumps(wav)), tm)
            print('TURN', tm, '->', r)
        for tts in ['gemini-3.8-flash-tts', 'gemini-3.5-flash-tts', 'gemini-2.5-flash-preview-tts', 'gemini-2.5-flash-tts', 'gemini-3-flash-tts-preview', 'gemini-flash-tts-latest']:
            r = await pg.evaluate("""async m => { const t0 = performance.now(); try { const a = await GeminiLive.speech(Object.assign(gemOpts(), {ttsModel: m}), 'Thanks for that. Can you walk me through how you closed the books faster?', 'Aoede'); return a ? 'OK ' + Math.round(performance.now()-t0) + 'ms ' + a.mime + ' bytes=' + Math.round(a.data.length*0.75) : 'NO AUDIO' } catch (e) { return 'ERR ' + (e.message||e).slice(0,200) } }""", tts)
            print('TTS', tts, '->', r)
        await b.close()
    srv.terminate()
asyncio.run(main())
