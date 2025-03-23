import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('databaseName');

export async function initDatabase() {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        Userid INTEGER NOT NULL,
        conditionOrder INTEGER,
        condition TEXT,
        elapsedTime INTEGER
      );
    `);

    console.log('Database initialized');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
}

export async function createUser(userId: number, conditionOrder: number) {
  try {
    const result = await db.runAsync(
      'INSERT INTO Users (Userid, conditionOrder) VALUES (?,?)',
      userId,
      conditionOrder,
    );
    return result.lastInsertRowId;
  } catch (error) {
    console.error('Insert error:', error);
  }
}

export async function insertUserTimes(userId: number, condition: string, elapsedTime: number) {
  try {
    const result = await db.runAsync(
      'INSERT INTO Users (Userid, condition, elapsedTime) VALUES (?, ?, ?)',
      userId,
      condition,
      elapsedTime,
    );
    return result.lastInsertRowId;
  } catch (error) {
    console.error('Insert error:', error);
  }
}

export async function getAllUsers() {
  try {
    const rows = await db.getAllAsync('SELECT * FROM Users');
    return rows;
  } catch (error) {
    console.error('Query error:', error);
  }
}

export async function getUser(userId: number) {
  try {
    const row = await db.getAllAsync('SELECT * FROM Users WHERE Userid = ?', userId);
    return row;
  } catch (error) {
    console.error('Query error:', error);
  }
}

export async function dropTable() {
  try {
    await db.execAsync('DROP TABLE IF EXISTS Users');
    console.log('Table dropped successfully');
  } catch (error) {
    console.error('Drop table error:', error);
  }
}
