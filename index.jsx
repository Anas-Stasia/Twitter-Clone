/* ================================
   DATA
================================ */

// const tweetsData = [
//     {
//         handle: '@TrollBot66756542 💎',
//         profilePic: 'images/troll.jpg',
//         likes: 27,
//         retweets: 10,
//         tweetText: `Buy Bitcoin, ETH Make 💰💰💰 low low prices.
// Guaranteed return on investment. HMU DMs open!!`,
//         replies: [],
//         isLiked: false,
//         isRetweeted: false,
//         uuid: '4b161eee-c0f5-4545-9c4b-8562944223ee'
//     },
//     {
//         handle: '@Elon ✅',
//         profilePic: 'images/musk.png',
//         likes: 6500,
//         retweets: 234,
//         tweetText: 'I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀',
//         replies: [
//             {
//                 handle: '@TomCruise ✅',
//                 profilePic: 'images/tcruise.png',
//                 tweetText: 'Yes! Sign me up! 😎🛩'
//             },
//             {
//                 handle: '@ChuckNorris ✅',
//                 profilePic: 'images/chucknorris.jpeg',
//                 tweetText: 'I went last year😴'
//             }
//         ],
//         isLiked: false,
//         isRetweeted: false,
//         uuid: '3c23454ee-c0f5-9g9g-9c4b-77835tgs2'
//     },
//     {
//         handle: '@NoobCoder12',
//         profilePic: 'images/flower.png',
//         likes: 10,
//         retweets: 3,
//         tweetText: 'Are you a coder if you only know HTML?',
//         replies: [
//             {
//                 handle: '@StackOverflower ☣️',
//                 profilePic: 'images/overflow.png',
//                 tweetText: "No. Obviously not. Go get a job in McDonald's."
//             },
//             {
//                 handle: '@YummyCoder64',
//                 profilePic: 'images/love.png',
//                 tweetText: 'You are wonderful just as you are! ❤️'
//             }
//         ],
//         isLiked: false,
//         isRetweeted: false,
//         uuid: '8hy671sff-c0f5-4545-9c4b-1237gyys45'
//     }
// ]

// /* ================================
//    DOM ELEMENTS
// ================================ */

// const feedEl = document.getElementById('feed')
// const tweetInput = document.getElementById('tweet-input')
// const tweetBtn = document.getElementById('tweet-btn')

// /* ================================
//    EVENT LISTENERS
// ================================ */

// document.addEventListener('click', e => {
//     if (e.target.dataset.like) {
//         handleLikeClick(e.target.dataset.like)
//     } else if (e.target.dataset.retweet) {
//         handleRetweetClick(e.target.dataset.retweet)
//     } else if (e.target.dataset.reply) {
//         handleReplyClick(e.target.dataset.reply)
//     }
// })

// tweetBtn.addEventListener('click', handleTweetSubmit)

// /* ================================
//    HANDLERS
// ================================ */

// function handleLikeClick(tweetId) {
//     const tweet = tweetsData.find(tweet => tweet.uuid === tweetId)
//     tweet.likes += tweet.isLiked ? -1 : 1
//     tweet.isLiked = !tweet.isLiked
//     renderFeed()
// }

// function handleRetweetClick(tweetId) {
//     const tweet = tweetsData.find(tweet => tweet.uuid === tweetId)
//     tweet.retweets += tweet.isRetweeted ? -1 : 1
//     tweet.isRetweeted = !tweet.isRetweeted
//     renderFeed()
// }

// function handleReplyClick(tweetId) {
//     const tweet = tweetsData.find(tweet => tweet.uuid === tweetId)
//     tweet.isRepliesVisible = !tweet.isRepliesVisible
//     renderFeed()
// }

// function handleTweetSubmit() {
//     const tweetText = tweetInput.value.trim()
//     if (!tweetText) return

//     tweetsData.unshift({
//         handle: '@You',
//         profilePic: 'images/scrimbalogo.png',
//         likes: 0,
//         retweets: 0,
//         tweetText,
//         replies: [],
//         isLiked: false,
//         isRetweeted: false,
//         uuid: crypto.randomUUID()
//     })

//     tweetInput.value = ''
//     renderFeed()
// }

// /* ================================
//    RENDER
// ================================ */

// function renderFeed() {
//     feedEl.innerHTML = tweetsData
//         .map(tweet => {
//             const likeClass = tweet.isLiked ? 'liked' : ''
//             const retweetClass = tweet.isRetweeted ? 'retweeted' : ''

//             const repliesHtml = tweet.isRepliesVisible
//                 ? tweet.replies
//                       .map(reply => `
//                         <div class="tweet-reply">
//                             <div class="tweet-inner">
//                                 <img src="${reply.profilePic}" class="profile-pic">
//                                 <div>
//                                     <p class="handle">${reply.handle}</p>
//                                     <p class="tweet-text">${reply.tweetText}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     `)
//                       .join('')
//                 : ''

//             return `
//                 <div class="tweet">
//                     <div class="tweet-inner">
//                         <img src="${tweet.profilePic}" class="profile-pic">
//                         <div>
//                             <p class="handle">${tweet.handle}</p>
//                             <p class="tweet-text">${tweet.tweetText}</p>

//                             <div class="tweet-details">
//                                 <div class="tweet-detail">
//                                     <i class="fa-regular fa-comment"
//                                        data-reply="${tweet.uuid}"></i>
//                                     <span>${tweet.replies.length}</span>
//                                 </div>

//                                 <div class="tweet-detail">
//                                     <i class="fa-regular fa-heart ${likeClass}"
//                                        data-like="${tweet.uuid}"></i>
//                                     <span>${tweet.likes}</span>
//                                 </div>

//                                 <div class="tweet-detail">
//                                     <i class="fa-solid fa-retweet ${retweetClass}"
//                                        data-retweet="${tweet.uuid}"></i>
//                                     <span>${tweet.retweets}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     ${repliesHtml}
//                 </div>
//             `
//         })
//         .join('')
// }

// /* ================================
//    INIT
// ================================ */

// renderFeed()


// Grab elements
const tweetInput = document.getElementById('tweet-input');
const tweetBtn = document.getElementById('tweet-btn');
const feed = document.getElementById('feed');

// Function to create a tweet
function createTweet(text) {
    const tweetDiv = document.createElement('div');
    tweetDiv.classList.add('tweet');

    const tweetText = document.createElement('p');
    tweetText.textContent = text;

    // Like button
    const likeBtn = document.createElement('button');
    likeBtn.textContent = 'Like';
    likeBtn.classList.add('like-btn');
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('liked');
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        feed.removeChild(tweetDiv);
    });

    tweetDiv.appendChild(tweetText);
    tweetDiv.appendChild(likeBtn);
    tweetDiv.appendChild(deleteBtn);

    feed.prepend(tweetDiv); // Newest tweet on top
}

// Event listener for tweet button
tweetBtn.addEventListener('click', () => {
    const tweet = tweetInput.value.trim();
    if (tweet) {
        createTweet(tweet);
        tweetInput.value = '';
    } else {
        alert('Please write something before tweeting!');
    }
});