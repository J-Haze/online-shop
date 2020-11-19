const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { Product } = require("../models/Product");
const { auth } = require("../middleware/auth");

// const

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
    cart: req.user.cart,
    history: req.user.history,
    size: req.user.size,
  });
});

// let sQuantityValue = 0;
// let mQuantityValue = 0;
// let lQuantityValue = 0;
// let xlQuantityValue = 0;

router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_authExp", user.tokenExp);
        res.cookie("w_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: "", tokenExp: "" },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});

router.get("/addToCart", auth, (req, res) => {
  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    let duplicate = false;

    let packString = req.query.productId;
    console.log("pack inner0", packString);
    var packArr = packString.split("-");
    console.log("pack inner", packArr);

    console.log("req", req);
    console.log("Inner0", packArr[0]);
    console.log("Inner1", packArr[1]);

    console.log("userInfo:", userInfo);

    userInfo.cart.forEach((item) => {
      if (item.id == packArr[0]) {
        duplicate = true;
      }
    });

    let sQuantity = 0;
    let mQuantity = 0;
    let lQuantity = 0;
    let xlQuantity = 0;

    if (packArr[1] == 1) {
      sQuantity = 1;
    } else if (packArr[1] == 2) {
      mQuantity = 1;
    } else if (packArr[1] == 3) {
      lQuantity = 1;
    } else if (packArr[1] == 4) {
      xlQuantity = 1;
    } else {
      console.log("Size Error");
    }

    if (duplicate) {
      User.findOneAndUpdate(
        { _id: req.user._id, "cart.id": packArr[0] },
        {
          $inc: {
            "cart.$.quantity": 1,
            "cart.$.sQuantity": sQuantity,
            "cart.$.mQuantity": mQuantity,
            "cart.$.lQuantity": lQuantity,
            "cart.$.xlQuantity": xlQuantity,
          },
        },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(userInfo.cart);
        }
      );
    } else {
      User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            cart: {
              id: packArr[0],
              quantity: 1,
              //  sQuantity: 0,
              //  mQuantity: 0,
              //  lQuantity: 0,
              //  xlQuantity: 0,
              sQuantity: sQuantity,
              mQuantity: mQuantity,
              lQuantity: lQuantity,
              xlQuantity: xlQuantity,
              // sizeInner: packArr[1],
              date: Date.now(),
            },
          },
        },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(userInfo.cart);
        }
      );
    }
  });
});

router.get("/removeFromCart", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      $pull: { cart: { id: req.query._id } },
    },
    { new: true },
    (err, userInfo) => {
      let cart = userInfo.cart;
      let array = cart.map((item) => {
        return item.id;
      });

      Product.find({ _id: { $in: array } })
        .populate("writer")
        .exec((err, cartDetail) => {
          return res.status(200).json({
            cartDetail,
            cart,
          });
        });
    }
  );
});

router.get("/userCartInfo", auth, (req, res) => {
  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    let cart = userInfo.cart;
    let array = cart.map((item) => {
      return item.id;
    });

    Product.find({ _id: { $in: array } })
      .populate("writer")
      .exec((err, cartDetail) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({ success: true, cartDetail, cart });
      });
  });
});

module.exports = router;
