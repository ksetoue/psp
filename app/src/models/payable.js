const status =  Object.freeze({
    PAID: 'paid',
    WAITING_FUNDS: 'waiting_funds',
});

/**
 * @name payable
 * @description This module handles payable model for sequelize  '
 *
 * @module payable
 */
module.exports = (sequelize, DataTypes) => {
    const payable = sequelize.define('payable', {
        transactionId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'transaction',
                key: 'id',
            },
        },
        
        clientId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'clients',
                key: 'id',
            },
        },

        status: {
            type: DataTypes.ENUM(
                status.PAID,
                status.WAITING_FUNDS,
            ),
            allowNull: false,
        },

        fee: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 1,
            },
        },

        paymentDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
    
    payable.associate = (models) => {
        payable.belongsTo(models.client);
        payable.belongsTo(models.transaction);
    };

    return payable;
}
