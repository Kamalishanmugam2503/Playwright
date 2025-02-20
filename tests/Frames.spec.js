import { test, expect } from "@playwright/test";

test ('Frames',async ({page}) => {
    const frame = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"})
    
});

