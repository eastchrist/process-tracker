

module.exports = {
    alarmOld: function(modifs) {
        for(let indexRow = 0; indexRow <  modifs.rows.length; indexRow++){
            const maxLosse = modifs.rows[indexRow].dataValues.maxLosse
            const firstLosses = modifs.rows[indexRow].dataValues.firstLosses
            const currentLosses = modifs.rows[indexRow].dataValues.currentLosses
            if ((firstLosses === null) && (currentLosses === null)) {
                Object.assign( modifs.rows[indexRow].dataValues, { 'alarmLosses' : false });
            } else if (currentLosses !== null) {
                if ( currentLosses >= maxLosse) {
                    Object.assign( modifs.rows[indexRow].dataValues, { 'alarmLosses' : true });
                } else {
                    Object.assign( modifs.rows[indexRow].dataValues, { 'alarmLosses' : false });
                }
            } else if (firstLosses !== null) {
                if ( firstLosses >= maxLosse) {
                    Object.assign( modifs.rows[indexRow].dataValues, { 'alarmLosses' : true });
                } else {
                    Object.assign( modifs.rows[indexRow].dataValues, { 'alarmLosses' : false });
                }
            }
        }
        return modifs
    },
    haveToBeValidated: function(modifs) {
        for(let indexRow = 0; indexRow <  modifs.rows.length; indexRow++){
            const haveToBeCheck = modifs.rows[indexRow].dataValues.haveToBeCheck
            const haveBeenCheck = modifs.rows[indexRow].dataValues.haveBeenCheck
            if ((haveToBeCheck === true) && (haveBeenCheck === true)) {
                Object.assign( modifs.rows[indexRow].dataValues, { 'haveToBeValidated' : true });
            } else {
                Object.assign( modifs.rows[indexRow].dataValues, { 'haveToBeValidated' : false });
            }

        }
        return modifs
    },
    haveToBeCheck: function(modifs) {
        const today = new Date();
        for(let indexRow = 0; indexRow <  modifs.rows.length; indexRow++){
            const haveToBeCheck = modifs.rows[indexRow].dataValues.haveToBeCheck
            //const modeAutoCheckActif = modifs.rows[indexRow].dataValues.modeAutoCheckActif
            //const lastCheckDate = modifs.rows[indexRow].dataValues.lastCheckDate
            //const freqCheckNbDays = modifs.rows[indexRow].dataValues.freqCheck * 7

            //const nextCheckDate = new Date();
            //if ( lastCheckDate === null) {
            //    nextCheckDate.setDate(nextCheckDate.getDate() - 2000)
            //} else {
            //    nextCheckDate.setDate(lastCheckDate.getDate() + freqCheckNbDays)
            //}

            //if ( ( haveToBeCheck === true ) || (( modeAutoCheckActif === true ) && ( today > nextCheckDate ))) {
            if ( haveToBeCheck === true ) {
                modifs.rows[indexRow].dataValues.haveToBeCheck = true
            } else {
                modifs.rows[indexRow].dataValues.haveToBeCheck = false
            }

        }
        return modifs
    },
    calculPaybackOld: function(modifs) {
        for (let indexProject = 0; indexProject <  modifs.rows.length; indexProject++){
            const projectPrice = modifs.rows[indexProject].dataValues.hoursPrice + modifs.rows[indexProject].dataValues.materialPrice + modifs.rows[indexProject].dataValues.electricalPrice
            let perteAnnuel = 0
            for (let indexFonction = 0; indexFonction <  modifs.rows[indexProject].dataValues.fonctionsLinked.length; indexFonction++){
                const firstLossesPrice = modifs.rows[indexProject].dataValues.fonctionsLinked[indexFonction].dataValues.firstAnnualLosses
                const nbLosse = modifs.rows[indexProject].dataValues.fonctionsLinked[indexFonction].dataValues.nbLosse
                if ((firstLossesPrice !== null) && (firstLossesPrice !== 0) && (firstLossesPrice !== undefined) && (nbLosse !== null) && (nbLosse !== 0) && (nbLosse !== undefined) ) {
                    perteAnnuel = perteAnnuel + (nbLosse * firstLossesPrice)
                }
            }
            let calcul = ''
            if ( (projectPrice !== null) && (projectPrice !== 0) && (projectPrice !== undefined) && (perteAnnuel !== null) && (perteAnnuel !== 0) && (perteAnnuel !== undefined)) {
                calcul = ((projectPrice * 52) / perteAnnuel).toFixed(2)
            }
            Object.assign( modifs.rows[indexProject].dataValues, { 'payback' : calcul });
        }
        return modifs
    }
}
