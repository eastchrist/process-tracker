
var filterFloat = function (value) {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
        .test(value))
        return Number(value);
    return 0;
}

module.exports = {
    //from Functions
    GetFirstAnnualLosses: function( nbLosse, Losses, enabled  ) {
        if ((nbLosse === '') || (Losses === '') ||
            (nbLosse === null) || (Losses === null) ||
            (nbLosse === undefined) || (Losses === undefined) ||
            (enabled === false)) {
                return ''
        } else if ((nbLosse === 0) || (Losses === 0)) {
                return 0
        } else {
                return (nbLosse * Losses).toFixed(2)
        }
    },
    GetFirstAnnualPrice: function( nbLosse, Losses, LossesPrice, enabled  ) {
        if ((nbLosse === '') || (Losses === '') || (LossesPrice === '') ||
            (nbLosse === null) || (Losses === null) || (LossesPrice === null) ||
            (nbLosse === undefined) || (Losses === undefined) || (LossesPrice === undefined) ||
            (enabled === false)) {
                return ''
        } else if ((nbLosse === 0) || (Losses === 0) || (LossesPrice === 0)) {
                return 0
        } else {
                return (nbLosse * Losses * ( LossesPrice / Losses )).toFixed(2)
        }
    },
    GetCurrentAnnualLosses: function( nbLosse, Losses, enabled  ) {
        if ((nbLosse === '') || (Losses === '') ||
            (nbLosse === null) || (Losses === null) ||
            (nbLosse === undefined) || (Losses === undefined)  ||
            (enabled === false)) {
                return ''
        } else if ((nbLosse === 0) || (Losses === 0)) {
                return 0
        } else {
                return (nbLosse * Losses).toFixed(2)
        }
    },
    GetCurrentAnnualPrice: function( nbLosse, Losses, LossesPrice, enabled  ) {
        if ((nbLosse === '') || (Losses === '') || (LossesPrice === '') ||
            (nbLosse === null) || (Losses === null) || (LossesPrice === null) ||
            (nbLosse === undefined) || (Losses === undefined) || (LossesPrice === undefined) ||
            (enabled === false)) {
                return ''
        } else if ((nbLosse === 0) || (Losses === 0) || (LossesPrice === 0)) {
                return 0
        } else {
                return (nbLosse * Losses * ( LossesPrice / Losses )).toFixed(2)
        }
    },
    GetRecoveryAnnualLosses: function( nbLosse, Losses, percentRecovery, enabled  ) {
        if ((nbLosse === '') || (Losses === '') || (percentRecovery === '') ||
            (nbLosse === null) || (Losses === null) || (percentRecovery === null) ||
            (nbLosse === undefined) || (Losses === undefined) || (percentRecovery === undefined) ||
            (enabled === false)) {
            return ''
        } else if ((nbLosse === 0) || (Losses === 0) || (percentRecovery === 0)) {
            return 0
        } else {
            return (nbLosse * Losses * percentRecovery / 100).toFixed(2)
        }
    },
    GetRecoveryAnnualPrice: function( nbLosse, Losses, LossesPrice, percentRecovery, enabled  ) {
        if ((nbLosse === '') || (Losses === '') || (LossesPrice === '') || (percentRecovery === '') ||
            (nbLosse === null) || (Losses === null) || (LossesPrice === null) || (percentRecovery === null) ||
            (nbLosse === undefined) || (Losses === undefined) || (LossesPrice === undefined) || (percentRecovery === undefined) ||
            (enabled === false)) {
            return ''
        } else if ((nbLosse === 0) || (Losses === 0) || (LossesPrice === 0) || (percentRecovery === 0)) {
            return 0
        } else {
            return (nbLosse * Losses * ( LossesPrice / Losses ) * percentRecovery / 100 ).toFixed(2)
        }
    },

    GetFonctionLinked: function( idProjectLink, idProjectLinkSelected, enabled ) {
        if ((idProjectLink === '') || (idProjectLinkSelected === '') ||
            (idProjectLink === null) || (idProjectLinkSelected === null) ||
            (idProjectLink === undefined) || (idProjectLinkSelected === undefined) ||
            (enabled === false)) {
                return ''
        } else if ((idProjectLink <= 0) || (idProjectLinkSelected === false)) {
                return false
        } else {
                return true
        }
    },
    GetFonctionEnable: function( enabled ) {
        return enabled
    },
    GetAlarmLosses: function( maxLosse, firstLosses, currentLosses, enabled) {
        const alarm = false
        if ( ( currentLosses === null ) ) {
            if (( firstLosses >= maxLosse ) && ( enabled === true)) { return true }
        } else {
            if (( currentLosses >= maxLosse ) && ( enabled === true)) { return true }
        }
        return false
    },
    GetToBeCheckActif: function( haveToBeCheck,  lastCheckDate, freqCheck, modeAutoCheckActif, enabled) {
        const haveToBeCheckManager = haveToBeCheck
        const days = ( freqCheck * 7 )
        //const modeAutoCheckActif = modeAutoCheckActif
        let nextCheckDate = new Date( lastCheckDate )

        nextCheckDate.setDate(nextCheckDate.getDate() + days)
        const today = new Date()
        if ((haveToBeCheckManager === true) && ( enabled === true)) {
            return true
        } else
        if ((modeAutoCheckActif === true) && ( lastCheckDate !== null ) && ( today >= nextCheckDate ) && ( enabled === true)) {
            return true
        }
        return false
    },

    //from Projects
    GetprojectFunctionLinkedNb: function( fonctionsLinked ) {
        return fonctionsLinked.length
    },

    GetprojectFunctionLinkedFirstAnnualLossesAndPrice: function( fonctionsLinked ) {
        let annualLosses = 0
        let annualPrice = 0
        for (let index = 0; index < fonctionsLinked.length; index++) {
            const getAnnualLosses = this.GetFirstAnnualLosses(fonctionsLinked[index].nbLosse, fonctionsLinked[index].firstLosses, fonctionsLinked[index].enabled)
            const getAnnualPrice = this.GetFirstAnnualPrice(fonctionsLinked[index].nbLosse, fonctionsLinked[index].firstLosses, fonctionsLinked[index].firstLossesPrice, fonctionsLinked[index].enabled)

            if (getAnnualLosses !== '') { annualLosses = annualLosses + parseFloat(getAnnualLosses) }
            if (getAnnualPrice !== '') { annualPrice = annualPrice + parseFloat(getAnnualPrice) }
        }
        return { projectFunctionLinkedFirstAnnualLosses: annualLosses, projectFunctionLinkedFirstAnnualPrice: annualPrice}
    },
    GetprojectFunctionLinkedCurrentAnnualLossesAndPrice: function( fonctionsLinked ) {
        let annualLosses = 0
        let annualPrice = 0
        for (let index = 0; index < fonctionsLinked.length; index++) {
            const getAnnualLosses = this.GetCurrentAnnualLosses(fonctionsLinked[index].nbLosse, fonctionsLinked[index].firstLosses, fonctionsLinked[index].enabled)
            const getAnnualPrice = this.GetCurrentAnnualPrice(fonctionsLinked[index].nbLosse, fonctionsLinked[index].firstLosses, fonctionsLinked[index].firstLossesPrice, fonctionsLinked[index].enabled)

            if (getAnnualLosses !== '') { annualLosses = annualLosses + parseFloat(getAnnualLosses) }
            if (getAnnualPrice !== '') { annualPrice = annualPrice + parseFloat(getAnnualPrice) }
        }
        return { projectFunctionLinkedCurrentAnnualLosses: annualLosses, projectFunctionLinkedCurrentAnnualPrice: annualPrice }
    },
    GetprojectFunctionLinkedRecoveryAnnualLossesAndPrice: function( fonctionsLinked ) {
        let annualLosses = 0
        let annualPrice = 0
        for (let index = 0; index < fonctionsLinked.length; index++) {
            const getAnnualLosses = this.GetFirstAnnualLosses(fonctionsLinked[index].nbLosse, fonctionsLinked[index].firstLosses, fonctionsLinked[index].enabled)
            const getAnnualPrice = this.GetFirstAnnualPrice(fonctionsLinked[index].nbLosse, fonctionsLinked[index].firstLosses, fonctionsLinked[index].firstLossesPrice, fonctionsLinked[index].enabled)
            const projectPercentageRecovery = fonctionsLinked[index].projectPercentRecovery
            if ((projectPercentageRecovery !== null) || (projectPercentageRecovery !== undefined) || (projectPercentageRecovery >= 0)) {
                if (getAnnualLosses !== '') { annualLosses = annualLosses + ( parseFloat(getAnnualLosses) * projectPercentageRecovery / 100) }
                if (getAnnualPrice !== '') { annualPrice = annualPrice + ( parseFloat(getAnnualPrice) * projectPercentageRecovery / 100) }
            }
        }
        return { projectFunctionLinkedRecoveryAnnualLosses: annualLosses, projectFunctionLinkedRecoveryAnnualPrice: annualPrice }
    },
}
