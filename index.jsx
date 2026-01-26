const tweetText = document.getElementById('tweetText');
const tweetBtn = document.getElementById('tweetBtn');
const feed = document.getElementById('feed');
const charCount = document.getElementById('charCount');

let tweets = JSON.parse(localStorage.getItem('tweets')) || [];

// Update character counter
tweetText.addEventListener('input', () => {
    charCount.textContent = `${tweetText.value.length} / 280`;
});

// Render tweets
function renderTweets() {
    feed.innerHTML = '';
    tweets.forEach((tweet, index) => {
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet');

        tweetDiv.innerHTML = `
            <img src="https://i.pravatar.cc/50?img=${index + 3}">
            <div class="tweet-content">
                <div class="tweet-header">
                    <strong>Anas</strong>
                    <span> @anas_dev · ${tweet.time}</span>
                </div>
                <div class="tweet-text">${tweet.text}</div>
                <div class="tweet-footer">
                    <span class="${tweet.liked ? 'liked' : ''}" onclick="likeTweet(${index})">
                        ❤️ ${tweet.likes}
                    </span>
                    <span class="${tweet.retweeted ? 'retweeted' : ''}" onclick="retweet(${index})">
                        🔁 ${tweet.retweets}
                    </span>
                    <span class="delete" onclick="deleteTweet(${index})">
                        🗑
                    </span>
                </div>
            </div>
        `;
        feed.appendChild(tweetDiv);
    });
}

// Add tweet
tweetBtn.addEventListener('click', () => {
    if (tweetText.value.trim() === '') return;

    const newTweet = {
        text: tweetText.value,
        likes: 0,
        retweets: 0,
        liked: false,
        retweeted: false,
        time: new Date().toLocaleTimeString()
    };

    tweets.unshift(newTweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
    tweetText.value = '';
    charCount.textContent = '0 / 280';
    renderTweets();
});

// Like tweet
function likeTweet(index) {
    tweets[index].liked = !tweets[index].liked;
    tweets[index].likes += tweets[index].liked ? 1 : -1;
    localStorage.setItem('tweets', JSON.stringify(tweets));
    renderTweets();
}

// Retweet
function retweet(index) {
    tweets[index].retweeted = !tweets[index].retweeted;
    tweets[index].retweets += tweets[index].retweeted ? 1 : -1;
    localStorage.setItem('tweets', JSON.stringify(tweets));
    renderTweets();
}

// Delete tweet
function deleteTweet(index) {
    tweets.splice(index, 1);
    localStorage.setItem('tweets', JSON.stringify(tweets));
    renderTweets();
}

// Initial render
renderTweets();