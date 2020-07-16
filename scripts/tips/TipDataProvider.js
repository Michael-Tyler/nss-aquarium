const tipCollection = [{
    tipTitle: "Condition Your Water",
    text: "The first step is to add a water conditioner which will de-chlorinate your tap water"
}, {
    tipTitle: "Do Not Overstock Your Tank",
    text: "It is very important that you do not overcrowd your tank. An overstocked tank leads to stress and disease."
}, {
    tipTitle: "Do Not Overfeed Your Fish",
    text: " Only feed what your fish will eat right away. You do not want extra food floating around in the tank."

}]

export const useTips = () => {
    return tipCollection.slice()
}