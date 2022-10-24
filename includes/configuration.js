const PROJECT_ENV = process.env[PROJECT_ENV] || 'development';

const GCP_PROJECT_ID = process.env[GCP_PROJECT_ID];

module.exports = {
    PROJECT_ENV,
    GCP_PROJECT_ID
};