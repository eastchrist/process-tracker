
module.exports = {
    factory: function(modifs) {
        for(let i = 0; i <  modifs.rows.length; i++){
            if (modifs.rows[i].dataValues.factory === null) {
                modifs.rows[i].dataValues.factory = { name: "??????????",name1: "??????????"}
            }
        }
        return modifs
    },
    area: function(modifs) {
        for(let i = 0; i <  modifs.rows.length; i++){
            if (modifs.rows[i].dataValues.area === null) {
                modifs.rows[i].dataValues.area = { name: "??????????",name1: "??????????"}
            }
        }
        return modifs
    },
    server: function(modifs) {
        for(let i = 0; i <  modifs.rows.length; i++){
            if (modifs.rows[i].dataValues.server === null) {
                modifs.rows[i].dataValues.server = { name: "??????????",name1: "??????????"}
            }
        }
        return modifs
    },
    plc: function(modifs) {
        for(let i = 0; i <  modifs.rows.length; i++){
            if (modifs.rows[i].dataValues.plc === null) {
                modifs.rows[i].dataValues.plc = { name: "??????????",name1: "??????????"}
            }
        }
        return modifs
    },
    equip: function(modifs) {
        for(let i = 0; i <  modifs.rows.length; i++){
            if (modifs.rows[i].dataValues.equip === null) {
                modifs.rows[i].dataValues.equip = { name: "??????????",name1: "??????????"}
            }
        }
        return modifs
    },
    tankAreaDefEmptying: function(modifs) {
        for(let i = 0; i <  modifs.rows.length; i++){
            if (modifs.rows[i].dataValues.tankAreaDefEmptying === null) {
                modifs.rows[i].dataValues.tankAreaDefEmptying = { name: "",name1: ""}
            }
        }
        return modifs
    },
    tankAreaDefFilling: function(modifs) {
        for(let i = 0; i <  modifs.rows.length; i++){
            if (modifs.rows[i].dataValues.tankAreaDefFilling === null) {
                modifs.rows[i].dataValues.tankAreaDefFilling = { name: "",name1: ""}
            }
        }
        return modifs
    },
    tankArea: function(modifs) {
        for(let i = 0; i <  modifs.rows.length; i++){
            if (modifs.rows[i].dataValues.tankArea === null) {
                modifs.rows[i].dataValues.tankArea = { name: "??????????",name1: "??????????"}
            }
        }
        return modifs
    },
    measureType: function(modifs) {
        for(let i = 0; i <  modifs.rows.length; i++){
            if (modifs.rows[i].dataValues.measureType === null) {
                modifs.rows[i].dataValues.measureType = { name: "??????????",name1: "??????????"}
            }
        }
        return modifs
    },
}

