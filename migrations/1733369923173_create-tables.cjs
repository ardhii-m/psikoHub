/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable('doctors', {
    doctor_id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    rating: {
      type: 'VARCHAR(8)',
      notNull: true,
    },
  });

  pgm.createTable('users', {
    user_id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    email: {
      type: 'TEXT',
      unique: true,
      notNull: true,
    },
    password: {
      type: 'VARCHAR(50)',
      notNull: true,
    }
  });

  pgm.createTable('profiles', {
    user_id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
      references: 'users(user_id)',
      onDelete: 'CASCADE',
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    email: {
      type: 'TEXT',
      notNull: true,
    },
    contact_number: {
      type: 'TEXT',
      notNull: true,
    },
    address: {
      type: 'TEXT',
    }
  });

  pgm.createTable('bookings', {
    booking_id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    email: {
      type: 'TEXT',
      notNull: true,
    },
    contact_number: {
      type: 'TEXT',
      notNull: true,
      unique: true,
    },
    date: {
      type: 'TEXT',
      notNull: true,
    },
    doctor_name: {
      type: 'TEXT',
      notNull: true,
    },
    profile_id: {
      type: 'VARCHAR(50)',
      notNull: true,
      references: 'profiles(user_id)',
      onDelete: 'CASCADE',
    },
    doctor_id: {
      type: 'VARCHAR(50)',
      notNull: true,
      unique: true,
      references: 'doctors(doctor_id)',
      onDelete: 'CASCADE',
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable('doctors');
  pgm.dropTable('profiles');
  pgm.dropTable('users');
  pgm.dropTable('bookings');
};

