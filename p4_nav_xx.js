function gopage(index) {
    const p = document.querySelector('#main');
    console.log('p', p);
    switch (index) {
      case 1:
        p.innerHTML = `<iframe src="./p1_xx/tictactoe_xx.html" width="100%" height="700px" > </iframe>`;
        break;
      case 2:
        p.innerHTML = `<iframe src="./p2_xx/resume_xx.html" width="100%" height="700px" > </iframe>`;
        break;
      case 3:
        p.innerHTML = `<iframe src="./p3_xx/divjsDemo_xx.html" width="100%" height="700px" > </iframe>`;
        break;
    }
  }
  
  function toggle() {
    const p = document.querySelector('#tap');
    p.classList.toggle('invisible');
  }
  