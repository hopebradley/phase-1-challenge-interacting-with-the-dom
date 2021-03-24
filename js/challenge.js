document.addEventListener('DOMContentLoaded', () => {

    let counter = document.getElementById('counter');
    let num = parseInt(counter.innerText);
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const pauseButton = document.getElementById('pause');
    const likeButton = document.getElementById('heart');
    const restartButton = document.getElementById('restart');
    const commentButton = document.getElementById('submit');
    let timesLiked = 0;
    
    let counterInterval;

    function countUp() {
        num += 1;
        counter.innerText = num;
        currentId = num;
    }

    function countDown() {
        if (num > 0) {
            num -= 1;
            counter.innerHTML = num;
        }
    }

    function startCounting() {
        counterInterval = setInterval(countUp, 1000);
    }

    function pauseCount() {
        if (pauseButton.innerText === "pause") {
            clearInterval(counterInterval);
            plusButton.disabled = true;
            minusButton.disabled = true;
            likeButton.disabled = true;
            pauseButton.innerText = 'resume';
        }
        else {
            startCounting();
            pauseButton.innerText = 'pause';
            plusButton.disabled = false;
            minusButton.disabled = false;
            likeButton.disabled = false;}
    }

    function restart() {
      num = -1;
    }

    function likeNumber(e) {
      let li = document.getElementById(`likes-for-${num}`)
      if (li) {
        console.log('it exists');
        li.dataset.likes = parseInt(li.dataset.likes) + 1; 
        li.innerText = `${num} has been liked ${li.dataset.likes} times`;
        
      }
      else {
        console.log('doesnt exist');
        let newLi = document.createElement('li');
        newLi.setAttribute('id', `likes-for-${num}`);
        newLi.dataset.likes = 1;
        newLi.innerText = `${num} has been liked ${newLi.dataset.likes} time.`;
        const likes = document.getElementsByClassName('likes')[0];
        likes.appendChild(newLi);


        // timesLiked++;
        // let li = document.getElementById(`likes-for-${num}`);
        // li.innerText = `${num} has been liked ${timesLiked} times.`;
      }
    }
    
    function addComment(e) {
      e.preventDefault();
      const commentList = document.getElementsByClassName('comments')[0];
      const comment = document.createElement('p');
      comment.innerText = document.getElementById('comment-input').value;
      commentList.appendChild(comment);
      document.getElementById('comment-input').value = '';
    }

    startCounting();

    pauseButton.addEventListener('click', pauseCount);
    
    plusButton.addEventListener('click', countUp);

    minusButton.addEventListener('click', countDown);

    restartButton.addEventListener('click', restart)

    likeButton.addEventListener('click', likeNumber);

    commentButton.addEventListener('click', addComment);


});
