# Tsatsas Countdown
This repo contains a template for a Diamond Way tsatsas / mantras countdown website.
The project also contains PWA(Progressive Web App) setup.

### To start:

- Clone the repo and give it an appropriate name.
- For local development:
  1. Add `.env` file with `REACT_APP_AWS_DYNAMODB_URI` variable to access AWS DYNAMO DB.
- Update texts:
  1. Footer Component: Your center name and a link
  2. MantrasIntro Component: You project name, text(if you wish) and a link.
- Project setup on GH (using Actions for deployment):
  If you host the Counter on diamondway.org you can setup automatic deployment on GH push action
  1. Go to Settings -> Secrets: add `AWS_DYNAMODB_URI`, `FTP_URL`, `FTP_USERNAME`, `FTP_PASSWORD`
  2. Get in touch to get DYNAMO DB table setup for your project.
