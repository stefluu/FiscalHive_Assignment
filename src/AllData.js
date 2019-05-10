const allData = {
    gear: {
        total: 1124,
        categoriesState: {
            g1: 100,
            g2: 139,
            g3: 129,
            g4: 159,
            g5: 50,
            g6: 180,
            g7: 79,
            g8: 140,
            g9: 59,
            g10: 39,
            g11: 50
        }, 
        items: {
            g1: { id: "g1", item: "Infant car seat ($60 - $150)", price: 100 },
            g2: { id: "g2", item: "Convertible car seat ($80 - $300)", price: 139 },
            g3: { id: "g3", item: "Basic stroller ($70 - $900)", price: 129 },
            g4: { id: "g4", item: "Double stroller ($100 - $300)", price: 159 },
            g5: { id: "g5", item: "'Snap-on 'stroller frame($40 - $90)", price: 50 },
            g6: { id: "g6", item: "Jogging stroller ($100 - $300)", price: 180 },
            g7: { id: "g7", item: "Play yard ($59 - $150)", price: 79 },
            g8: { id: "g8", item: "Baby backpack ($40 - $300)", price: 140 },
            g9: { id: "g9", item: "Front carrier ($25 - $120)", price: 59 },
            g10: { id: "g10", item: "Sling or wrap carrier ($29 - $60)", price: 39 },
            g11: { id: "g11", item: "Diaper bag ($25 - $200)", price: 50 }
        }
    },

    activity: {
        total: 310,
        categoriesState: {
            a1: 100,
            a2: 40,
            a3: 80,
            a4: 50,
            a5: 40,
        },
        items: {
            a1: { id: "a1", item: "Swing ($85 - $120)", price: 100 },
            a2: { id: "a2", item: "Bouncer/bouncy seat ($30 - $70)", price: 40 },
            a3: { id: "a3", item: "Activity center ($70 - $80)", price: 80 },
            a4: { id: "a4", item: "Play mat/gym ($25 - $80)", price: 50 },
            a5: { id: "a5", item: "Doorway jumper ($30 - $40)", price: 40 }

        }
    },

    nursery: {
        total: 1703,
        categoriesState: {
            n1: 230,
            n2: 120,
            n3: 230,
            n4: 100,
            n5: 165,
            n6: 25,
            n7: 64,
            n8: 150,
            n9: 30,
            n10: 250,
            n11: 40,
            n12: 150,
            n13: 99,
            n14: 50
        },

        items: {
            n1: { id: "n1", item: "Crib ($120 - $850)", price: 230 },
            n2: { id: "n2", item: "Changing table ($80 - $250)", price: 120 },
            n3: { id: "n3", item: "Glider or rocker ($189 - $600)", price: 230 },
            n4: { id: "n4", item: "Bassinet ($50 - $260)", price: 100 },
            n5: { id: "n5", item: "Co-sleeper ($130 - $200)", price: 165 },
            n6: { id: "n6", item: "Hamper ($20 - $60)", price: 25 },
            n7: { id: "n7", item: "Basic bedding and blankets", price: 64 },
            n8: { id: "n8", item: "Coordinated crib bedding set ($50 - $600)", price: 150 },
            n9: { id: "n9", item: "Mobile ($20 - $55)", price: 30 },
            n10: { id: "n10", item: "Dresser ($80 - $500)", price: 250 },
            n11: { id: "n11", item: "Lamp ($24 - $70)", price: 40 },
            n12: { id: "n12", item: "Decorations", price: 150 },
            n13: { id: "n13", item: "Crib mattress ($60 - $140)", price: 99 },
            n14: { id: "n14", item: "Baby monitor ($40 - $60)", price: 50 }
        }
    },

    feeding: {
        total: 234,
        categoriesState: {
            f1: 60,
            f2: 100,
            f3: 13,
            f4: 10,
            f5: 21,
            f6: 10,
            f7: 8,
            f8: 12
        },
        items: {
            f1: { id: "f1", item: "Bottles and nipples", price: 60 },
            f2: { id: "f2", item: "Highchair ($60 - $250)", price: 100 },
            f3: { id: "f3", item: "Utensils", price: 13 },
            f4: { id: "f4", item: "Plates and bowls", price: 10 },
            f5: { id: "f5", item: "Cups and sippy cups", price: 21 },
            f6: { id: "f6", item: "Burp cloths (6)", price: 10 },
            f7: { id: "f7", item: "Bottle Brush (2)", price: 8 },
            f8: { id: "f8", item: "Bibs (10)", price: 12 }
        }
    },

    breastfeeding: {
        total: 457,
        categoriesState: {
            b1: 250,
            b2: 30,
            b3: 73,
            b4: 75,
            b5: 29
        },
        items: {
            b1: { id: "b1", item: "Electric breast pump ($150 - $350)", price: 250 },
            b2: { id: "b2", item: "Manual breast pump", price: 30 },
            b3: { id: "b3", item: "Milk storage bags, breast pads, extra breast shields, ice packs", price: 73 },
            b4: { id: "b4", item: "Nursing bras (3)", price: 75 },
            b5: { id: "b5", item: "Nursing pillow ($24 - $44)", price: 29 }
        }
    },

    bathingGrooming: {
        total: 72,
        categoriesState: {
            n1: 16,
            n2: 20,
            n3: 15,
            n4: 10,
            n5: 8,
            n6: 3
        },
        items: {
            bg1: { id: "bg1", item: "Baby towel with hood (2)", price: 16 },
            bg2: { id: "bg2", item: "Infant bathtub", price: 20 },
            bg3: { id: "bg3", item: "Tub for older baby", price: 15 },
            bg4: { id: "bg4", item: "Baby washcloths (5)", price: 10 },
            bg5: { id: "bg5", item: "Brush and comb", price: 8 },
            bg6: { id: "bg6", item: "Baby nail clippers", price: 3 }
        }
    },

    other: {
        total: 524,
        categoriesState: {
            n1: 43,
            n2: 120,
            n3: 25,
            n4: 96,
            n5: 8,
            n6: 30,
            n7: 50,
            n8: 25,
            n9: 127,
            n10: 0
        },
        items: {
            oth1: { id: "oth1", item: "Childproofing supplies", price: 43 },
            oth2: { id: "oth2", item: "Safety gates (2)", price: 120 },
            oth3: { id: "oth3", item: "Diaper pail", price: 25 },
            oth4: { id: "oth4", item: "Diaper pail refills", price: 96 },
            oth5: { id: "oth5", item: "Pacifiers", price: 8 },
            oth6: { id: "oth6", item: "Humidifier ($29 - $69", price: 30 },
            oth7: { id: "oth7", item: "Birth announcements (50)", price: 50 },
            oth8: { id: "oth8", item: "Baby book or scrapbook ($12 - $40)", price: 25 },
            oth9: { id: "oth9", item: "Photo printing costs", price: 127 },
            oth10: { id: "oth10", item: "Miscellaneous", price: 0 }
        }
    }
}

export default { allData };