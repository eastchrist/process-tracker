import variables from "@/styles/_variables.scss";


export const  getDesignElementUiHeaderStyle = ( rowIndex: number, columnIndex: number, designTable: any, totalRow: number) => {
    //Header
    if (rowIndex === 0) {
        return {
            "color": designTable.title.font["color"],
            "background-color": designTable.title["background-color"],
            "text-align": designTable.title["textAlign"],
            "padding": designTable.title["padding"],
            "font-family": designTable.title.font["family"],
            "font-size": designTable.title.font["size"],
            "border-top":  designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-bottom": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-left": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-right": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
        };
    }
    //SubHeater First column
    else if (rowIndex === 1) {
        //SubHeater First column
        if (columnIndex === 0) {
            return {
                "color": designTable.subTitle.font["color"],
                "background-color": designTable.subTitle["background-color"],
                "text-align": designTable.subTitle["textAlign"],
                "padding": designTable.subTitle["padding"],
                "font-family": designTable.subTitle.font["family"],
                "font-size": designTable.subTitle.font["size"],
                "border-top": "0px solid " + designTable.subTitle.bordure.color,
                "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
                "border-left": designTable.title.bordure.length + "px solid " + designTable.subTitle.bordure.color,
                "border-right": designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
            };
        }
        //SubHeater Last column
        else if (columnIndex === (designTable.columns.length - 1)) {
            return {
                "color": designTable.subTitle.font["color"],
                "background-color": designTable.subTitle["background-color"],
                "text-align": designTable.subTitle["textAlign"],
                "padding": designTable.subTitle["padding"],
                "font-family": designTable.subTitle.font["family"],
                "font-size": designTable.subTitle.font["size"],
                "border-top": "0px solid " + designTable.subTitle.bordure.color,
                "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
                "border-left": "0px solid " + designTable.subTitle.bordure.color,
                "border-right": designTable.title.bordure.length + "px solid " + designTable.subTitle.bordure.color,
            };
        }
        //SubHeater All other column
        else {
            return {
                "color": designTable.subTitle.font["color"],
                "background-color": designTable.subTitle["background-color"],
                "text-align": designTable.subTitle["textAlign"],
                "padding": designTable.subTitle["padding"],
                "font-family": designTable.subTitle.font["family"],
                "font-size": designTable.subTitle.font["size"],
                "border-top": "0px solid " + designTable.subTitle.bordure.color,
                "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
                "border-left": "0px solid " + designTable.subTitle.bordure.color,
                "border-right": designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
            }
        }
    }
}
export const  getDesignElementUiCellsStyle= ( rowIndex: number, columnIndex: number, designTable: any, totalRow: number ) => {
    if ((columnIndex < designTable.columns.length) && (totalRow > 0)) {
        //All on the left
        if (columnIndex == 0) {
            //Top Left
            if (rowIndex == 0) {
                //Test Table with only one row
                if (totalRow === 1) {
                    return {
                        "background-color": designTable.columns[columnIndex].backgroundColor,
                        "text-align": designTable.columns[columnIndex].textAlign,
                        "padding": designTable.columns[columnIndex].padding,
                        "font-family": designTable.columns[columnIndex].font.family,
                        "color": designTable.columns[columnIndex].font.color,
                        "font-size": designTable.columns[columnIndex].font.size,
                        "border-top": "0px solid " + designTable.columnsBordure.color,
                        "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.columnsBordure.color,
                        "border-left": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                        "border-right": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                    };
                }
                else {
                    return {
                        "background-color": designTable.columns[columnIndex].backgroundColor,
                        "text-align": designTable.columns[columnIndex].textAlign,
                        "padding": designTable.columns[columnIndex].padding,
                        "font-family": designTable.columns[columnIndex].font.family,
                        "color": designTable.columns[columnIndex].font.color,
                        "font-size": designTable.columns[columnIndex].font.size,
                        "border-top": "0px solid " + designTable.columnsBordure.color,
                        "border-bottom": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                        "border-left": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                        "border-right": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                    };
                }
            }
            //Bottom Left
            else if (rowIndex == (totalRow - 1)) {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding + 'px',
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                };
            }
            // other on the left
            else {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding,
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,

                };
            }
        }
        //All on the right
        else if (columnIndex == (designTable.columns.length - 1)) {
            //Top Rigth
            if ((columnIndex == (designTable.columns.length - 1)) && (rowIndex == 0)) {
                //Test Table with only one row
                if (totalRow === 1) {
                    return {
                        "background-color": designTable.columns[columnIndex].backgroundColor,
                        "text-align": designTable.columns[columnIndex].textAlign,
                        "padding": designTable.columns[columnIndex].padding + 'px',
                        "font-family": designTable.columns[columnIndex].font.family,
                        "color": designTable.columns[columnIndex].font.color,
                        "font-size": designTable.columns[columnIndex].font.size,
                        "border-top": "0px solid " + designTable.columnsBordure.color,
                        "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.columnsBordure.color,
                        "border-left": "0px solid " + designTable.columnsBordure.color,
                        "border-right": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                    };
                }
                else {
                    return {
                        "background-color": designTable.columns[columnIndex].backgroundColor,
                        "text-align": designTable.columns[columnIndex].textAlign,
                        "padding": designTable.columns[columnIndex].padding + 'px',
                        "font-family": designTable.columns[columnIndex].font.family,
                        "color": designTable.columns[columnIndex].font.color,
                        "font-size": designTable.columns[columnIndex].font.size,
                        "border-top": "0px solid " + designTable.columnsBordure.color,
                        "border-bottom": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                        "border-left": "0px solid " + designTable.columnsBordure.color,
                        "border-right": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                    };
                }
            }
            //Bottom Right
            else if (((columnIndex == (designTable.columns.length - 1)) && (rowIndex == (totalRow - 1)))) {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding,
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": "0px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                };
            }
            //All other
            else {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding,
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": "0px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                }
            }
        }
        //All other
        else {
            if (rowIndex == (totalRow - 1)) {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding,
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": "0px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                };
            }
            else {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding,
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": "0px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                };
            }
        }
    }
}



export const getDesignTableHeaderStyle = ( rowIndex: number, columnIndex: number, columnMax: number, designTable: any) => {
    //Header
    if (rowIndex === 0) {
        return {
            "color": designTable.title.font["color"],
            "background-color": designTable.title["background-color"],
            "text-align": designTable.title["textAlign"],
            "padding": designTable.title["padding"],
            "font-family": designTable.title.font["family"],
            "font-size": designTable.title.font["size"],
            "border-top":  designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-bottom": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-left": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            "border-right": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
        }
    }
    //SubHeater
    else if (rowIndex >= 1) {
        //SubHeater First column
        if (columnIndex === 0) {
            return {
                "color": designTable.subTitle.font["color"],
                "background-color": designTable.subTitle["background-color"],
                "text-align": designTable.subTitle["textAlign"],
                "padding": designTable.subTitle["padding"],
                "font-family": designTable.subTitle.font["family"],
                "font-size": designTable.subTitle.font["size"],
                "border-top":  designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
                "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
                "border-left": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
                "border-right": designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
            }
        }
        //SubHeater Last column
        else if (columnIndex === (columnMax - 1)) {
            return {
                "color": designTable.subTitle.font["color"],
                "background-color": designTable.subTitle["background-color"],
                "text-align": designTable.subTitle["textAlign"],
                "padding": designTable.subTitle["padding"],
                "font-family": designTable.subTitle.font["family"],
                "font-size": designTable.subTitle.font["size"],
                "border-top":  designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
                "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
                "border-left": designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
                "border-right": designTable.title.bordure.length + "px solid " + designTable.title.bordure.color,
            }
        } else {
            return {
                "color": designTable.subTitle.font["color"],
                "background-color": designTable.subTitle["background-color"],
                "text-align": designTable.subTitle["textAlign"],
                "padding": designTable.subTitle["padding"],
                "font-family": designTable.subTitle.font["family"],
                "font-size": designTable.subTitle.font["size"],
                "border-top":  designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
                "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
                "border-left": designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
                "border-right": designTable.subTitle.bordure.length + "px solid " + designTable.subTitle.bordure.color,
            }
        }
    }
}
export const getDesignTableCellsStyle = ( rowIndex: number, columnIndex: number, rowMax: number, columnMax: number, designTable: any) => {
    if (columnIndex < columnMax) {
        //All on the left
        if (columnIndex == 0) {
            //Top Left
            if (rowIndex == 0) {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding,
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                };
            }
            //Bottom Left
            else if (rowIndex == (rowMax - 1)) {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding + 'px',
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                };
            }
            // other on the left
            else {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding,
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,

                };
            }
        }
        //All on the right
        else if (columnIndex == (columnMax - 1)) {
            //Top Rigth
            if (rowIndex == 0) {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding + 'px',
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": "0px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                }
                //Bottom Right
            } else if (rowIndex == (rowMax - 1)) {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding,
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": "0px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                };

            }
            //All other
            else {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding,
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": "0px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.title.bordure.length + "px solid " + designTable.columnsBordure.color,
                }
            }
        }
        //All other
        else {
            //All other bottom
            if (rowIndex == (rowMax - 1)) {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding,
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.subTitle.bordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": "0px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                }
            } else {
                return {
                    "background-color": designTable.columns[columnIndex].backgroundColor,
                    "text-align": designTable.columns[columnIndex].textAlign,
                    "padding": designTable.columns[columnIndex].padding,
                    "font-family": designTable.columns[columnIndex].font.family,
                    "color": designTable.columns[columnIndex].font.color,
                    "font-size": designTable.columns[columnIndex].font.size,
                    "border-top": "0px solid " + designTable.columnsBordure.color,
                    "border-bottom": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                    "border-left": "0px solid " + designTable.columnsBordure.color,
                    "border-right": designTable.columnsBordure.length + "px solid " + designTable.columnsBordure.color,
                };
            }
        }
    }
}
