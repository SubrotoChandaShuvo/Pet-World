# Pet World

**Live Demo:** [Pet World Services](https://stellular-tapioca-d55da7.netlify.app/services)

## Overview

Pet World is a modern web application dedicated to pet services including grooming, training, health checkups, and care guidance. The platform provides pet owners with convenient access to high-quality services and helps pets live happier, healthier lives.

## Features

* **User Authentication:** Login and Signup using email/password and Google authentication via Firebase.
* **Password Toggle:** Show/Hide password functionality for enhanced user experience.
* **Firebase Integration:** Real-time authentication, user management, and secure storage.
* **Responsive Design:** Fully responsive layouts for mobile, tablet, and desktop.
* **Service Listings:** Browse and explore all pet services offered.
* **Customer Reviews:** Read experiences and testimonials from satisfied pet owners.
* **Animations:** Smooth UI animations using Animate.css for engaging user experience.
* **Private Routes:** Certain routes are protected and require authentication to access.

## Technologies Used

* React.js
* Firebase Authentication & Hosting
* React Router DOM
* Tailwind CSS / DaisyUI
* Animate.css
* React Icons
* React Hot Toast

## Installation & Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
```

2. Navigate to the project directory:

```bash
cd pet-world
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root with Firebase config:

```env
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_APP_ID=your_app_id
```

5. Run the development server:

```bash
npm start
```

6. Build for production:

```bash
npm run build
```

7. Deploy to Firebase Hosting:

```bash
firebase deploy
```

## Usage

1. Open the [live link](https://stellular-tapioca-d55da7.netlify.app/services) to explore Pet World services.
2. Sign up or log in to access protected services and features.
3. Browse available pet services and read customer reviews.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License

This project is open source and available under the MIT License.

---

**Pet World** aims to create a friendly and trustworthy platform for pet owners to take care of their pets’ needs efficiently.
