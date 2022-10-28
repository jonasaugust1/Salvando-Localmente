import * as SQLite from 'expo-sqlite'

function abreConexao() {
    const db = SQLite.openDatabase('db.db')
    return db
}

export const db = abreConexao()