# Spotify Clone V.2.0

https://user-images.githubusercontent.com/88297303/154817721-256b2586-dc7f-4da8-beb3-e91f250a7e03.mp4

## Description of the Application

This Spotify Web Application is made using NextJS and Tailwindcss, and it's completely responsive for all devices.

# How to use

## 1. Make sure you have NODE installed!

Firstly, you will need to download the latest version of Node by <a href="https://nodejs.org/en/download/">CLICKING HERE</a>

## 2. Clone the repo!

Next, you will need to run the following command in the Terminal to clone the repo onto your machine.

```git clone https://github.com/Timex19/Spotify_Clone-V2.0.git```

## 3. Install Dependancies

Next, you need to install all the dependancies using:

```npm install```

## 4. Setup the App

You will need to create a .env file and change the spotify client Id and client secret to your own and also adding the NEXTAUTH_URL before running the app:
![env](https://raw.githubusercontent.com/Timex19/Spotify_Clone-V2.0/master/assets/code.png)
To add your own spotify client Id <a href="https://developer.spotify.com/dashboard/applications/">CLICK ON THIS LINK</a> then sign in using your spotify login details but if you don't have a spotify account you can simply register a new one, then go to your dashboard and create your own project and name it anything you want then add a redirect uri after creating the project with ```http://localhost:3000/api/auth/callback/spotify```.

Once this is done, you can start the app by running:

```npm run dev```

🚀 BOOM, you are now LIVE!!!

<b> Note: Inorder to be enable other users to be able to login to the app, you will need to add each user in your spotify developer dashboard by clicking on User and Access. </b>

Anyway that's all, thanks for your time.
