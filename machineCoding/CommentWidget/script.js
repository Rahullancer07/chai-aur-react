// Function to create a new comment
function createComment(text) {
    const comment = document.createElement('div');
    comment.classList.add('comment');
    comment.innerHTML = `
        <p>${text}</p>
        <button class="reply-btn">Reply</button>
        <div class="reply-form">
            <textarea class="comment-textarea" placeholder="Write your reply..."></textarea>
            <button class="submit-reply-btn">Submit</button>
        </div>
        <div class="replies-container"></div>
    `;
    return comment;
}

// Function to handle reply button click
function handleReplyClick(event) {
    const replyForm = event.target.nextElementSibling;
    replyForm.style.display = 'block';
}

// Function to handle submit reply button click
function handleSubmitReply(event) {
    const replyForm = event.target.parentElement;
    const replyText = replyForm.querySelector('.comment-textarea').value;
    const parentComment = replyForm.parentElement;
    const repliesContainer = parentComment.querySelector('.replies-container');

    const reply = createComment(replyText);
    repliesContainer.appendChild(reply);

    // Clear reply textarea and hide reply form
    replyForm.querySelector('.comment-textarea').value = '';
    replyForm.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const commentsContainer = document.getElementById('comments-container');

    // Add event listeners for reply buttons
    commentsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('reply-btn')) {
            handleReplyClick(event);
        }
    });

    // Add event listeners for submit reply buttons
    commentsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('submit-reply-btn')) {
            handleSubmitReply(event);
        }
    });

    // Initial comment
    const initialComment = createComment('This is the initial comment.');
    commentsContainer.appendChild(initialComment);
});
