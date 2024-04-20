const express = require('express')
const bodyparser = require('body-parser')
const mysql = require('mysql2/promise')
const { message } = require('statuses')
const cors = require('cors')

const app = express()
const port = 8000

app.use(bodyparser.json())
app.use(cors())

let users = []
let conn = null
// ................... เชื่อม port ต่อกับ ฐานข้อมูล ................... //
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'web',
        port: 3306
    })
}
// ................... get users ทั้งหมดที่บันทึกข้อมูลเข้าไปออกมา ................... //
app.get('/signin', async (req, res) => {
    const results = await conn.query('SELECT * FROM signin')
    res.json(results[0])
})
app.get('/signup', async (req, res) => {
    const results = await conn.query('SELECT * FROM signup')
    res.json(results[0])
})
// ................... post สำหรับสร้าง users ใหม่................... //
app.post('/signin', async (req, res) => {
    try {
        let user = req.body
        const results = await conn.query('INSERT INTO signin SET ?', user)
        res.json({
            message: 'insert ok',
            data: results[0]
        })
    } catch (error) {
        console.error('error message', error.message)
        res.status(500).json({
            message: 'something wrong'
        })
    }
})
app.post('/signup', async (req, res) => {
    try {
        let user = req.body
        const results = await conn.query('INSERT INTO signup SET ?', user)
        res.json({
            message: 'insert ok',
            data: results[0]
        })
    } catch (error) {
        console.error('error message', error.message)
        res.status(500).json({
            message: 'something wrong'
        })
    }
})
// ................... get users/:id สำหรับ get users รายคนออกมา ................... //
app.get('/users:id', async (req, res) => {
    try {
        let id = req.params.id
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id)

        if (results[0].length == 0) {
            throw { statusCode: 404, message: 'หาไม่เจอ' }
        }
        res.json(results[0][0])
    } catch (error) {
        console.error('error message', error.message)
        let statusCode = statusCode.error || 500
        res.status(statusCode).json({
            message: 'something wrong',
            errorMessage: error.message
        })
    }
})
// ................... put users/:id สำหรับ เเก้ไข users รายคนตาม id ที่บันทึกเข้าไป ................... //
app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        let updateUser = req.body
        const results = await conn.query('UPDATE users SET WHERE id = ?', [updateUser, id])
        res.json({
            message: 'update ok',
            data: results[0]
        })
    }
    catch (error) {
        console.error('error message', error.message)
        res.status(500).json({
            message: 'somthing wrong'
        })
    }
})
// ................... DELETE users/:id ลบ users รายคน ตาม id ที่กรอกมา ................... //
app.delete('/users/:id' , async (req, res) => {
    try{
        let id  = req.params.id
        const results = await conn.query('DELETE from users WHERE id = ?' , parseInt(id))
        res.json({
            message: 'delete ok',
            data: results[0]
        })
    } catch (error) {
        console.error('error message', error.message)
        res.status(500).json({
            message: 'somthing wrong'
        })
    }
})

app.listen(port , async (req , res) => {
    await initMySQL()
    console.log('http server run at ' , + port)
})