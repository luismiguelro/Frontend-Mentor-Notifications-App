// Notifications collection

/*


 - avatar: string,
 - name: string,
 - content: string,
 - date: string,
 - unread: boolean,
 - type: string (standard | link | message | picture)
 - meta?: object
        linkType?: string (post | group)
        linkText?: string
        messge?: string
        picture?: string
*/

const notificationCollection =[
    {
        avatar:'assets/images/avatar-mark-webber.webp',
        name: 'Mark Webber',
        content: 'reacted to your recent post',
        date: '1m ago',
        unread: true,
        type : 'link',
        meta:{
            linkType: 'post',
            linkText: 'My first tournament today!'
        }
    }
]


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

// Compose notification DOM element
function composeNotification(notification){
    // notification wrapper 
    const notificationElement = document.createElement('article');
    notificationElement.classList.add('notification');

    // avatar
    const avatarElement = document.createElement('img');
    avatarElement.classList.add('avatar');
    avatarElement.alt = notification.name;
    avatarElement.src = notification.avatar;

    // title
    const titleElement=document.createElement('h2');
    h2.classList.add('notification__title');
    let titleContent = `<strong>${notification.name}</strong> ${notification.content}`;


    // Control notification states
    if(notification.unread){
        notificationElement.classList.add('notification--unread');
    }
}