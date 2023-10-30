const messagesContent = $('.msgs-content');
const messageInput = $('.msg-input');
const messageSubmit = $('.msg-submit');
const avatarImage = 'avatar.png';
const fakeMessages = [
    'Salut, comment puis-je t\'aider aujourd\'hui ?',
    'Ok, je vais voir ça pour toi',
    'Voici la solution que j\'ai pu trouvé :',
    'Je vais voir autre chose',
    'Je suis content que ça fonctionne de votre côté',
    'Vous pouvez trouvé plus de détails sur YouTube',
    'Qu\'en pensez vous ?',
    'Je ne suis pas sur d\'avoir bien compris',
    'Expliquez',
    'Voici la solution que j\'ai pu trouvé :',
    'Merci à vous, ça a été un plaisir d\'avoir pu vous aider aujourd\'hui',
    'A la prochaine',
    'Aurevoir',
    'N\'hésitez pas a laissez une note :'
];

let minutes = 0;

$(window).on('load', function () {
    messagesContent.mCustomScrollbar();
    setTimeout(fakeMessage, 100);
});

function updateScrollbar() {
    messagesContent.mCustomScrollbar('update').mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
    });
};

function addTimestamp() {
    const date = new Date();
    const minutesNow = date.getMinutes();

    if (minutes !== minutesNow) {
        minutes = minutesNow;
        const timeStamp = $('<div class="timestamp"></div>').text(`${date.getHours()}:${minutes}`);
        $('.msg:last').append(timeStamp);
    };
};

function addMessageToPage(msg, isPersonal = false) {
    const message = $('<div class="msg"></div>').text(msg);
    if (isPersonal) {
        message.addClass('msg-personal');
    } else {
        const figure = $('<figure class="avatar"></figure>');
        const image = $('<img>').attr('src', avatarImage);
        figure.append(image);
        message.addClass('new').prepend(figure);
    };
    $('.mCSB_container').append(message);
    addTimestamp();
    updateScrollbar();
};

function insertMessage() {
    const messageText = messageInput.val().trim();
    if (messageText === '') {
        return false;
    };
    addMessageToPage(messageText, true);
    messageInput.val(null);
    setTimeout(fakeMessage, 1000 + (Math.random() * 20) * 100);
};

messageInput.on('keydown', function (e) {
    if (e.which === 13) {
        insertMessage();
        return false;
    };
});

messageSubmit.on('click', insertMessage);

function fakeMessage() {
    if (messageInput.val() !== '') {
        return false;
    };

    const loadingMessage = $('<div class="msg loading new"></div>');
    const figure = $('<figure class="avatar"></figure>');
    const image = $('<img>').attr('src', avatarImage);
    figure.append(image);
    loadingMessage.append(figure).append($('<span></span>'));
    $('.mCSB_container').append(loadingMessage);
    updateScrollbar();

    setTimeout(function () {
        loadingMessage.remove();
        addMessageToPage(fakeMessages.shift());
    }, 1000 + (Math.random() * 20) * 100);
}
