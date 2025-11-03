module.exports = (sequelize, DataTypes) => {
    const Buku = sequelize.define('Buku', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pengarang: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tahun_terbit: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bidang_studi: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'buku',
        timestamps: false
    });

    return Buku;
};  