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
        },
    },
    {
        avatar: 'assets/images/avatar-angela-gray.webp',
        date: '5m ago',
        name: 'Angela Gray',
        content: 'followed you',
        unread: true,
        type: 'standard',
      },
      {
        avatar: 'assets/images/avatar-jacob-thompson.webp',
        date: '1 day ago',
        name: 'Jacob Thompson',
        content: 'has joined your group',
        unread: true,
        type: 'link',
        meta: {
          linkType: 'group',
          linkText: 'Chess Club',
        },
      },
      {
        avatar: 'assets/images/avatar-rizky-hasanuddin.webp',
        date: '5 days ago',
        name: 'Rizky Hasanuddin',
        content: 'sent you a private message',
        unread: false,
        type: 'message',
        meta: {
          message:
            "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        },
      },
      {
        avatar: 'assets/images/avatar-kimberly-smith.webp',
        date: '1 week ago',
        name: 'Kimberly Smith',
        content: 'commented on your picture',
        unread: false,
        type: 'picture',
        meta: {
          picture: 'assets/images/image-chess.webp',
        },
      },
      {
        avatar: 'assets/images/avatar-nathan-peterson.webp',
        date: '2 weeks ago',
        name: 'Nathan Peterson',
        content: 'reacted to your recent post',
        unread: false,
        type: 'link',
        meta: {
          linkType: 'post',
          linkText: '5 end-game strategies to increase your win rate',
        },
      },
      {
        avatar: 'assets/images/avatar-anna-kim.webp',
        date: '2 weeks ago',
        name: 'Anna Kim',
        content: 'has left the group',
        unread: false,
        type: 'link',
        meta: {
          linkType: 'group',
          linkText: 'Chess Club',
        },
      },
]


// Get DOM elements
const mainElement = document.querySelector('.notifications');
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

// show all notifications
function showAllNotifications(notifications){
    notifications.forEach(notification => {
        const notificationElement = composeNotification(notification);
        mainElement.appendChild(notificationElement);
    })
}

// Compose notification DOM element
function composeNotification(notification){
    // notification wrapper 
    const notificationElement = document.createElement('article');
    notificationElement.classList.add('notification');
    if(notification.unread){
        notificationElement.classList.add('notification--unread');
    }

    // avatar
    const avatarElement = document.createElement('img');
    avatarElement.classList.add('avatar');
    avatarElement.alt = notification.name;
    avatarElement.src = notification.avatar;

    // title
    const titleElement=document.createElement('h2');
    titleElement.classList.add('notification__title');
    let titleContent = `<strong>${notification.name}</strong> ${notification.content}`;

    if(notification.type==='link'){
        titleContent+=` <a href="#" class="link link--${notification.meta.linkType}">${notification.meta.linkText}</a>`
    }

    // Control notification states
    if(notification.unread){
        titleContent+=`<span class="unread-bubble"></span>`;  
    }
    titleElement.innerHTML = titleContent;

    // date
    const dateElement = document.createElement('p');
    dateElement.classList.add('date');
    dateElement.textContent = notification.date;

    // compose DOM element
    notificationElement.appendChild(avatarElement);
    notificationElement.appendChild(titleElement);
    notificationElement.appendChild(dateElement);

    // return it
    return notificationElement;
}

//const element = composeNotification(notificationCollection[0]);
//console.log(element);

// Go
showAllNotifications(notificationCollection);