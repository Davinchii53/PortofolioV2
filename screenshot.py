from playwright.sync_api import sync_playwright

def main():
    with sync_playwright() as p:
        browser = p.firefox.launch(headless=True)
        page = browser.new_page()
        page.goto('https://kelvinanshary.my.id/')
        page.wait_for_timeout(6000) # Wait for loading animation to finish
        page.screenshot(path='screenshot.png', full_page=True)
        content = page.content()
        with open('page.html', 'w', encoding='utf-8') as f:
            f.write(content)
        browser.close()

if __name__ == '__main__':
    main()
