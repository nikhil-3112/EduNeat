

![Picture2](https://github.com/nikhil-3112/EduNeat/assets/98270496/4e3ff1fc-c7b6-48a6-b4ce-9ce3d437d5df)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js installed on your machine
- API keys for the required services (details in the Configuration section)

### Installing

1. Clone the repository to your local machine using the following command:

```
git clone https://github.com/nikhil-3112/EduNeat.git
```

2. Navigate to the project directory:

```
cd EduNeat
```

3. Install dependencies using npm:

```
npm install
```

### Configuration

Before running the application, you need to configure the API keys for the required services. Follow these steps:

1. Create accounts and obtain API keys for the following services:
   - [Google Cloud Platform](https://cloud.google.com/)
   - [Google Classroom API](https://developers.google.com/classroom)
   - [Google Translate API](https://cloud.google.com/translate)

2. Create a `.env` file in the root directory of the project.

3. Add the following environment variables to the `.env` file and replace `YOUR_API_KEY` with your actual API keys:

```
GOOGLE_CLOUD_API_KEY=YOUR_API_KEY
GOOGLE_CLASSROOM_API_KEY=YOUR_API_KEY
GOOGLE_TRANSLATE_API_KEY=YOUR_API_KEY
```

### Running the Application

Once you've completed the installation and configuration steps, you can run the application locally using the following command:

```
npm start
```

The application will be accessible at `http://localhost:3000` by default.

## Running Tests

To run tests, use the following command:

```
npm test
```

## Deployment

Instructions for deploying the application to a live system will be added soon.

## Built With

- HTML, CSS, JavaScript
- Node.js
- Express.js
- React.js
- Google Cloud Platform
- Google Classroom API
- Google Translate API

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this guidance according to your project's specific requirements and dependencies. Let me know if you need further assistance!

EduNeat 
© 2024 - All Rights Reserved
