const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTA2MTI4MTI1NDc0NzY2ODcz.DreEZA.G-WfehxDD7ziUzeyrYm0tRDzQwc'

bot.on('message', function(message){
    if(message.content == 'S!Hello')
    {
        message.reply('Hello daddy;)')
    }
});

bot.on('message', function(message){
    if(message.content == 'S!Succ')
    {
        message.reply('Ill give you da Gud succ Daddy! SUCCY SUCCY!')
    }
});

bot.on('message', function(message){
    if(message.content == 'S!Slap')
    {
        message.reply('Harder Daddy')
    }
});

bot.on('message', function(message){
    if(message.content == 'S!Attack')
    {
        message.reply('Ill succ dem real Gud Daddy!')
    }
});

bot.on('message', function(message){
    if(message.content == 'S!Fuck')
    {
        message.reply('Stick it in my ass Daddy!')
    }
});

bot.on('message', function(message){
    if(message.content == 'S!Give Donuts')
    {
        message.reply('Daddy can I have some milk;)')
    }
});

bot.on('message', function(message){
    if(message.content == 'S!Milk')
    {
        message.reply('Ill milk you daddy.')
    }
});

bot.on('message', function(message){
    if(message.content == 'S!Lewd')
    {
        message.reply('https://ih1.redbubble.net/image.490790029.7108/ap,550x550,12x16,1,transparent,t.u1.png')
    }
});

bot.on('message', function(message){
    if(message.content == 'S!Shrimps')
    {
        message.reply('https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/feed/feednavigator.com/article/2018/09/27/deal-sees-neovia-consolidate-its-position-in-ecuador-s-shrimp-feed-market/8654748-1-eng-GB/Deal-sees-Neovia-consolidate-its-position-in-Ecuador-s-shrimp-feed-market_wrbm_large.jpg')
    }
});

bot.login(TOKEN);