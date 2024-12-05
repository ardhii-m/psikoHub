const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


console.log({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const doctorsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'doctors.json'), 'utf-8'));

const insertDoctors = async () => {
  try {
    for (const doctor of doctorsData) {
      await pool.query(
        'INSERT INTO doctors (doctor_id, name, rating) VALUES ($1, $2, $3)',
        [doctor.doctor_id, doctor.name, doctor.rating]
      );
    }
    console.log('Doctors data inserted successfully!');
  } catch (err) {
    console.error('Error inserting doctors data:', err.message);
  } finally {
    await pool.end();
  }
};

insertDoctors();