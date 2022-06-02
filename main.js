const express = require("express");
const app = express();
const cors = require("cors")
const { Sequelize, DataTypes } = require('sequelize');
app.use(cors())
const sequelize = new Sequelize('mysql', 'root', '492739465', {
    host: 'localhost',
    dialect: "mysql"
});
// console.log(sequelize)
// async function test() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// test()

const Demo = sequelize.define('demo', {
        name: DataTypes.TEXT,
        gender: DataTypes.TEXT,
        description: DataTypes.TEXT,
        address: DataTypes.TEXT,
    }, {
        tableName: 'demo'
    })
    // async function test() {
    //     await User.sync({ force: true });
    //     console.log("用户模型表刚刚(重新)创建！");
    // };
    // test()

const addData = [{
            name: "John Brown",
            description: "handsome",
            address: "New York No. 1 Lake Park",
            gender: "male",
        },
        {
            name: "John Brown",
            description: "handsome",
            address: "New York No. 1 Lake Park",
            gender: "male",
        }, {
            name: "John Brown",
            description: "handsome",
            address: "New York No. 1 Lake Park",
            gender: "male",
        }, {
            name: "John Brown",
            description: "handsome",
            address: "New York No. 1 Lake Park",
            gender: "famale",
        },
        {
            name: "Jim Green",
            description: "beautiful",
            address: "London No. 1 Lake Park",
            gender: "male",
        },
        {
            name: "Jim Green",
            description: "beautiful",
            address: "London No. 1 Lake Park",
            gender: "famale",
        }, {
            name: "Jim Green",
            description: "beautiful",
            address: "London No. 1 Lake Park",
            gender: "famale",
        },
        {
            name: "Joe Black",
            description: "beautiful",
            address: "Sydney No. 1 Lake Park",
            gender: "male",
        },
        {
            name: "Jon Snow",
            description: "handsome",
            address: "Ottawa No. 2 Lake Park",
            gender: "famale",
        },
        {
            name: "John Brown",
            description: "handsome",
            address: "New York No. 1 Lake Park",
            gender: "male",
        },
        {
            name: "Jim Green",
            description: "handsome",
            address: "London No. 1 Lake Park",
            gender: "male",
        },
        {
            name: "Joe Black",
            description: "handsome",
            address: "Sydney No. 1 Lake Park",
            gender: "famale",
        },
        {
            name: "Jon Snow",
            description: "handsome",
            address: "Ottawa No. 2 Lake Park",
            gender: "male",
        },
    ]
    //每次调用会向数据库中追加
for (let i = 0; i < addData.length; i++) {
    Demo.create(addData[i])
}

app.get("/person", (req, res) => {

    Demo.findAll().then((result) => {
        res.send(result)
            // console.log(result)
    })
})

app.listen(8000, () => {
    console.log("listening at 8000")
})