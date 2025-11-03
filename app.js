const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ 
    extended: false 
}));

app.listen(PORT, () => {
    console.log('Server started on port 3000');
})
db.sequelize.sync()
    .then((result) => {
    app.listen(3000, () => {
        console.log('Server Started');
    })
})
    .catch((err) => {
        console.log(err);
})

app.post('/buku', async (req, res) => {
    const data = req.body;
    try {
        const buku = await db.Buku.create(data);
        res.send(buku);
    } catch (error) {
        res.send({ message: error.message });
    }
});
app.get('/buku', async (req, res) => {
    try {const buku = await db.Buku.findAll();
        res.send(buku);
    } catch (error) {
        res.send({ message: error.message });
    }
});
app.put('/buku/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const buku = await db.Buku.update(data, { where: { id: id } });
        res.send({ message: 'Buku updated successfully' });
    } catch (error) {
        res.send({ message: error.message });
    }
});
app.delete('/buku/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const buku = await db.buku.findByPk(id);
        if (!buku) {
            return res.status(404).send({ message: 'Buku not found' });
        }
        await buku.destroy();
        res.send({ message: 'Buku deleted successfully' });
    }
    catch (error) {
        res.send({ message: error.message });
    }
}); 
