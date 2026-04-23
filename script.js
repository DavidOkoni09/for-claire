const letters = {
    'first-time': "<h2>Hello My Love,</h2><p>I wanted to give you something that lasts longer than words. These letters are my way of being there when I'm not actually there. N/B You have to wait till the tag applies before you can open any of them, okay. 😊</p>",
    'miss-me': "<h2>Hey Babyyyyyy,</h2><p>Well you might be opening this one a lot 🥹. And damnnn I miss you sooo much as well. I miss your serious side, the way you speak French when stressed, I miss that tone that lets me know you're happy, I miss disturbing you (ehem  side eye), I miss your beauty, I miss your VOICE, the way i feel when we talk, I could go on an on but you probably get it. I hope you're smiling at this point else you bet I'm crying. I love youuu. Even when we're apart, remember that you're always in my thoughts. Close your eyes and think of our favorite memory...</p>",
    'stressed': "<h2>Take a breath...</h2><p>If you're opening this it means you had a long, stressful day. I know how hard you work, I've seen it first hand. And I'm sooo very proud of you for finishing what you start and not giving up. You are capable, strong, and you've handled everything life has thrown at you so far. I'm so proud of you. Remember all the time you've worked at stuff, scared but consistent; work, chores, kids, activities. I remember all of em and I've always looked at you in awe and pride hehe. So go buy a snack and and next time we meet its on me, okay.</p>",
    'disagreement': "<h2>I'm sorry.</h2><p>Our bond is bigger than any argument. Let's talk it through because I value you more than being 'right'.</p>",
    'insecure': `
        <h2>HEY YOU!!! my beautiful girl</h2>
        <p>If you're looking in the mirror and doubting what you see, or if you're doubting your worth—stop. Let me tell you what I see.</p>
        <p>I see a woman who is incredibly beautiful, intelligent, and kind. You have a way of making everything better just by being there. You don't need to be "perfect", for me; you are already everything I’ve ever wanted. You are enough, Claire. Always.</p>
    `,
    'proud': `
        <h2>Yesss! I knew you could do it! 🥂</h2>
        <p>Whether you just finished that paperwork, finished a tough day, or finally figured out that one thing that was bothering you—I am SO proud of you.</p>
        <p>You work so hard, and seeing your success makes me the happiest man alive. Take a moment to celebrate yourself. You deserve it!</p>
    `,
    'hug': `
        <h2>A Virtual Hug (Hold for 5 seconds) 🫂</h2>
        <p>I wish I could wrap my arms around you right now. Since I can’t, I want you to wrap your arms around yourself, close your eyes, and imagine me squeezing you tight.</p>
        <p>I’m sending you all my warmth and energy. Stay there for a moment. I’ve got you, Claire Bear.</p>
    `,
    'how-much': `
        <h2>The Impossible Question ♾️</h2>
        <p>You asked for a measurement, but I'm an engineer—and some things are just mathematically infinite.</p>
        <p>I love you more than there are lines of code in this site, more than there are stars over London, and more than I love getting a complex structural calculation right on the first try. You are my greatest 'project' and my favorite person.</p>
    `,
     'future': `
        <h2>Our Next Chapter 🏡</h2>
        <p>Whenever you think about what’s next, I want you to see me right there next to you. I’m working hard on my code and my classes because I’m building a foundation for <i>us</i>.</p>
        <p>I see us traveling, building a home, and succeeding together. The future is bright because you're the one in it with me.</p>
    `,
     'long-day': `
        <h2>Hang in there, Baby! 🎓</h2>
        <p>I know those long hours at work can be draining. Whether it's boring paperwork or just the heat getting to you, remember why you're doing this.</p>
        <p>You’re building your future, and I’m right here cheering you on. When you're done, take a walk, get some cold water, and know that I’m waiting to hear all about your day. You've got this, Claire!</p>
    `,
     'no-sleep': `
        <h2>Go to sleep, sleepyhead 🌙</h2>
        <p>If you're reading this, it's probably late and your brain won't shut off. I wish I was there to tuck you in or talk you to sleep.</p>
        <p>Try to clear your mind. Think of the quietest, most peaceful place we've been together. I'm sending you a virtual forehead kiss. Rest well, my love—you need your energy for tomorrow.</p>
    `,
     'appreciated': `
        <h2>I see you, Baby. ❤️</h2>
        <p>I don't just love you for the big moments; I love you for the way you handle the small ones. I appreciate how you support me, how you chase your dreams, and even the way you laugh at my dumb jokes.</p>
        <p>You make my life so much better just by existing in it. Never doubt how much you mean to me.</p>
    `,
};

function openLetter(theme) {
    const modal = document.getElementById("letterModal");
    const content = document.getElementById("letterText");

    content.innerHTML = letters[theme];
    modal.style.display = "block";
}

function closeLetter() {
    document.getElementById("letterModal").style.display = "none";
}

// Close if they click outside the box
window.onclick = function (event) {
    let modal = document.getElementById("letterModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

