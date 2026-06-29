
  // fake visitor counter that goes up for no reason
  var count = 128405806481;
  var counterEl = document.getElementById('counter');
  setInterval(function () {
    count += Math.floor(Math.random() * 700);
    counterEl.textContent = String(count).padStart(6, '0');
  }, 2000);

  // year, but make it weird
  document.getElementById('year').textContent = new Date().getFullYear() + Math.floor(Math.random() * 1000000); ;

  // guestbook "submission"
  function signGuestbook(e) {
    e.preventDefault();
    var name = document.getElementById('gb-name').value || "my love";
    alert("cheers " + name + ", i will read it soon ig");
    return false;
  }

  function handleContact(e) {
    e.preventDefault();
    alert("message sent love you");
    return false;
  }

  function chaos() {
    var colors = ["red","blue","lime","yellow","magenta","cyan","orange","purple","black","white","grey"];
    var targets = document.querySelectorAll('.header, .nav, .content, .box, .side, .section, .now-playing, .webring');
    targets.forEach(function (el) {
      var bg = colors[Math.floor(Math.random() * colors.length)];
      var rot = Math.floor(Math.random() * 30) - 15;
      el.style.background = bg;
      el.style.transform = "rotate(" + rot + "deg)";
    });
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
  }

  var aiLines = [
    "mate idk dont ask me ",
    "bro turn this shit off",
    "killm e",
    "hahahah 6767676767 😂😂😂😂😂",
    "man",
    "yeah couldnt tell you go away",
    "shut up you sausage",
    "Yes.",
    "No."
  ];
  function aiRespond() {
    var span = document.getElementById('ai-response');
    span.textContent = aiLines[Math.floor(Math.random() * aiLines.length)];
  }
  var emojis = ["😂","😍","😢","❤️","🙏","🔔","🪊","🛘"];
  var moveCount = 0;
  document.addEventListener('mousemove', function (e) {
    moveCount++;
    if (moveCount % 1 !== 0) return;
    var span = document.createElement('span');
    span.className = 'floaty-emoji';
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = e.clientX + 'px';
    span.style.top = e.clientY + 'px';
    document.body.appendChild(span);
    setTimeout(function () { span.remove(); }, 1000);
  });