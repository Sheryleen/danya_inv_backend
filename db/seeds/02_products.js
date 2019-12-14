exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        {
          category_id: 1,
          sku: "1266486",
          item_name: "GLD TCC 6N TUBE",
          description: " ",
          cost: "$9.69",
          quantity: "2"
        },

        {
          category_id: 2,
          sku: "1188110",
          item_name: "MIR LUXE ADV FRMLA MATTE TRENDSETTR",
          description: " ",
          cost: "$11.00",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "1266192",
          item_name: "GLD TCC 6NN CAN",
          description: " ",
          cost: "$33.89",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "1266180",
          item_name: "GLD TCC 6G CAN",
          description: " ",
          cost: "$33.89",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "1266624",
          item_name: "GLD TCC 20V/6% DEVELOPER LOTION",
          description: " ",
          cost: "$8.99",
          quantity: "1"
        },

        {
          category_id: 2,
          sku: "1765305",
          item_name: "BAB PRO NT PRIMA MINI 3/4",
          description: "SMALL FLAT IRON ",
          cost: "$29.99",
          quantity: "1"
        },

        {
          category_id: 2,
          sku: "1763268",
          item_name: "BAB PRO NANO TI ULT THIN 1 1/2 IRN",
          description: "FLAT IRON ",
          cost: "$99.99",
          quantity: "1"
        },

        {
          category_id: 2,
          sku: "1252000",
          item_name: "PRO VINYL POWDER-FREE GLOVES ",
          description: "SMALL",
          cost: "$8.29",
          quantity: "1"
        },

        {
          category_id: 2,
          sku: "1141068",
          item_name: "FRM 1 LB MAGENTA ROLL FOIL",
          description: " ",
          cost: "$14.99",
          quantity: "1"
        },

        {
          category_id: 3,
          sku: "1573455",
          item_name: "PM PLATINUM BLONDE SHAMPOO",
          description: " ",
          cost: "$8.89",
          quantity: "1"
        },

        {
          category_id: 3,
          sku: "1578325",
          item_name: "PM PLATINUM BLONDE CONDITIONER",
          description: " ",
          cost: "$9.49",
          quantity: "1"
        },

        {
          category_id: 2,
          sku: "356834",
          item_name: "CRI DECO MIRR",
          description: " ",
          cost: "$7.79",
          quantity: "1"
        },

        {
          category_id: 2,
          sku: "358033",
          item_name: "CRI FINI LG B",
          description: " ",
          cost: "$11.26",
          quantity: "1"
        },

        {
          category_id: 2,
          sku: "358032",
          item_name: "CRI FINI SM B",
          description: " ",
          cost: "$10.00",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "703547",
          item_name: "OG IBLEND RED",
          description: " ",
          cost: "$10.47",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "105033",
          item_name: "UHC KERACOLOR",
          description: " ",
          cost: "$10.00",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "266469",
          item_name: "GLD TCC 5RB T",
          description: " ",
          cost: "$9.69",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "606053",
          item_name: "MN COLOUR REF",
          description: " ",
          cost: "$9.00",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "606057",
          item_name: "MN CLOUR REF",
          description: " ",
          cost: "$9.00",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "346146",
          item_name: "SBS REPELLE S",
          description: " ",
          cost: "$9.99",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "266536",
          item_name: "GLD TCC 9GN T",
          description: " ",
          cost: "$9.69",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "346402",
          item_name: "SBS COLOR MIX",
          description: " ",
          cost: "$2.49",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "266449",
          item_name: "GLD TCC 4G TU",
          description: " ",
          cost: "$9.69",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "266467",
          item_name: "GLD TCC 5NN T",
          description: " ",
          cost: "$9.69",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "266448",
          item_name: "GLD TCC 4BP T",
          description: " ",
          cost: "$9.69",
          quantity: "1"
        },

        {
          category_id: 2,
          sku: "882035",
          item_name: "FLIP-IT CAP",
          description: " ",
          cost: "$5.99",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "262573",
          item_name: "GLD COL CAN 6 ",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "262658",
          item_name: "GLD COL CAN C",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "262656",
          item_name: "GLD COL CAN 1",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "262657",
          item_name: "GLD COL CAN 1",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },

        {
          category_id: 1,
          sku: "262595",
          item_name: "GLD COL CAN 8",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262649",
          item_name: "GLD COL CAN 9",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262583",
          item_name: "GLD COL CAN 6",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262590",
          item_name: "GLD COL CAN 7",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262579",
          item_name: "GLD COL CAN 6",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262589",
          item_name: "GLD COL CAN 7 ",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262586",
          item_name: "GLD COL CAN 7",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262539",
          item_name: "GLD COL CAN 1",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262537",
          item_name: "GLD COL CAN 1",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262538",
          item_name: "GLD COL CAN 1",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262534",
          item_name: "GLD COL CAN 9",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262580",
          item_name: "GLD COL CAN 6",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262569",
          item_name: "GLD COL CAN 5",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262644",
          item_name: "GLD COL CAN 9",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262650",
          item_name: "GLD COL CAN 9",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "262572",
          item_name: "GLD COL CAN 5",
          description: " ",
          cost: "$15.75",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "266161",
          item_name: "GLD TCC 5GB C",
          description: " ",
          cost: "$30.25",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "P1542100",
          item_name: "RDK SHD EQ 08C",
          description: " ",
          cost: "$6.01",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "P1542000",
          item_name: "RDK SHD EQ 07C",
          description: " ",
          cost: "$6.01",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "P1631000",
          item_name: "RDK SHD EQ 08NA",
          description: " ",
          cost: "$6.01",
          quantity: "1"
        },
        {
          category_id: 1,
          sku: "P1540000",
          item_name: "RDK SHD EQ 01B",
          description: " ",
          cost: "$5.41",
          quantity: "1"
        }
      ]);
    });
};
