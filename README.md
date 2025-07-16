# AI Job Application Backend

## Quick Setup

1. **Clone the repository**
   ```bash
   git clone ###
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create the `uploads` folder in the project root**
   ```bash
   mkdir uploads
   ```

4. **Configure your database and environment variables**
   - Set any required environment variables (e.g., `GEMINI_API_KEY`) and .env file.

5. **Run database migrations and seeders**
   - By default, the project is set up to use AWS RDS.  
   - If you want to run a local database (e.g., PostgreSQL or MySQL), update your `.env` and `src/config/config.js` with your local DB credentials.
   - Set any required environment variables (e.g., `GEMINI_API_KEY`).

   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

6. **Start the server**
   ```bash
   npm start
   ``` 