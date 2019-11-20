const paymentMethods = Object.freeze({
    DEBIT: 'debit',
    CREDIT: 'credit',
});

module.exports = (sequelize, DataTypes) => {
    const transaction = sequelize.define('transaction', {
        clientId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'clients',
                key: 'id',
            },
        },

        paymentMethod: {
            type: DataTypes.ENUM(
                paymentMethods.DEBIT,
                paymentMethods.CREDIT,
            ),
            allowNull: false,
        },

        cardNumberLastDigits: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        cardOwnerName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        cardExpirationDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 1,
            },
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamp: true,
        updatedAt: false,
    });

    transaction.associate = (models) => {
        transaction.belongsTo(models.client);
    };

    return transaction;
};
