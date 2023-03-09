// Get DOM elements
const markAllasReadElement = document.querySelector('.header__link');
const unreadCountElement = document.querySelector('.unread-count');

//count notifications
let countNotification =0;

// listen for click events
markAllasReadElement.addEventListener('click',()=>{
    markAllasRead();
    resetUnreadCount(countNotification)
});

//mark all notification as read
function markAllasRead(){

    //get all unread notifications
    const unreadNotifications = document.querySelectorAll('.notification--unread');
    unreadNotifications.forEach(notification=>{
        notification.classList.remove('notification--unread');
       
    });
   
    countNotification = unreadNotifications.length

    //get all unread bubble
    const unreadBubble = document.querySelectorAll('.unread-bubble');
    unreadBubble.forEach(notification=>{
        notification.classList.remove('unread-bubble');
    });
    markAllasReadElement.textContent ="Mark all as unread";
   
}

// reset unread count
function resetUnreadCount(countNotification){
    if (countNotification>0){
        unreadCountElement.textContent = "0";
        
    } else{
        unreadCountElement.textContent = countNotification;

    }
    
}