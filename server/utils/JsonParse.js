
var findChildren =  function ( idChildren, Childrens ) {
    var retour = { name: '', name1: ''}
    for ( var Children of Childrens) {
        if (Children.id === idChildren) {
            return { name: Children.name, name1: Children.name1}
        }
    }
    return retour
}

module.exports = {
    options: function(modifs, childrens) {
        for(let indexRow = 0; indexRow <  modifs.rows.length; indexRow++){
            if (modifs.rows[indexRow].options) {
                modifs.rows[indexRow].options = JSON.parse( modifs.rows[indexRow].options );
                for(let indexOption = 0; indexOption <  modifs.rows[indexRow].options.length; indexOption++){
                    const tankDef = findChildren(modifs.rows[indexRow].options[indexOption].idTank, childrens)
                    modifs.rows[indexRow].options[indexOption] = Object.assign(modifs.rows[indexRow].options[indexOption],tankDef)
                }
            }
        }
        return modifs
    },
    childrenOptions: function(modifs, childrens) {
        for(let indexRow = 0; indexRow <  modifs.rows.length; indexRow++){
            if ( (modifs.rows[indexRow].tankAreaDefFilling !== '') && (modifs.rows[indexRow].tankAreaDefFilling !== null) ) {
                if (modifs.rows[indexRow].tankAreaDefFilling.options) {
                    try {
                        modifs.rows[indexRow].tankAreaDefFilling.options = JSON.parse( modifs.rows[indexRow].tankAreaDefFilling.options );
                    } catch (e) {
                        console.log(e)
                    }
                    for( let indexOption = 0; indexOption <  modifs.rows[indexRow].tankAreaDefFilling.options.length; indexOption++){
                        try {
                            const tankDef = findChildren(modifs.rows[indexRow].tankAreaDefFilling.options[indexOption].idTank, childrens)
                            modifs.rows[indexRow].tankAreaDefFilling.options[indexOption] = Object.assign(modifs.rows[indexRow].tankAreaDefFilling.options[indexOption],tankDef)
                        } catch (e) {
                            console.log(e)
                        }
                    }
                }
            }
            if ((modifs.rows[indexRow].tankAreaDefEmptying !== '') && (modifs.rows[indexRow].tankAreaDefEmptying !== null)) {
                if (modifs.rows[indexRow].tankAreaDefEmptying.options) {
                    try {
                        modifs.rows[indexRow].tankAreaDefEmptying.options = JSON.parse( modifs.rows[indexRow].tankAreaDefEmptying.options );
                    } catch (e) {
                        console.log(e)
                    }
                    for( let indexOption = 0; indexOption <  modifs.rows[indexRow].tankAreaDefEmptying.options.length; indexOption++){
                        try {
                            const tankDef = findChildren(modifs.rows[indexRow].tankAreaDefEmptying.options[indexOption].idTank, childrens)
                            modifs.rows[indexRow].tankAreaDefEmptying.options[indexOption] = Object.assign(modifs.rows[indexRow].tankAreaDefEmptying.options[indexOption],tankDef)
                        } catch (e) {
                            console.log(e)
                        }
                    }
                }
            }
        }
        return modifs
    },
}
