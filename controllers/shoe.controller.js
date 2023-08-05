const Shoe = require('../models/shoe.model');

module.exports = {
  createShoe: async (req, res) => {
    try {
      let imageUrl = req.files['img']?.[0]?.path;
      console.log(imageUrl);
      const { name, description, price, category } = req.body;
      if (!imageUrl) {
        imageUrl = req.body.imageUrl;
      }
      // Tạo giày mới
      const shoe = {
        name,
        description,
        price,
        category,
        imageUrl,
      };

      // Lưu giày vào CSDL
      const shoes = await Shoe.create(shoe);

      return res.status(201).json(shoes);
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Đã xảy ra lỗi khi tạo giày: ' + error.message });
    }
  },

  getShoes: async (req, res) => {
    try {
      const category = req.query.category;
      const bodyQuery = {};
      if (category) {
        bodyQuery.category = category;
      }
      const shoes = await Shoe.find(bodyQuery);
      return res.status(200).json(shoes);
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Đã xảy ra lỗi khi lấy danh sách giày' });
    }
  },

  getShoeById: async (req, res) => {
    try {
      const shoeId = req.params.id;

      // Tìm giày theo ID
      const shoe = await Shoe.findById(shoeId);
      if (!shoe) {
        return res.status(404).json({ error: 'Không tìm thấy giày' });
      }

      return res.status(200).json(shoe);
    } catch (error) {
      return res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy giày' });
    }
  },

  updateShoe: async (req, res) => {
    try {
      const shoeId = req.params.id;

      const body = req.body;

      // Kiểm tra xem giày có tồn tại trong CSDL hay không
      const existingShoe = await Shoe.findById(shoeId);
      if (!existingShoe) {
        return res.status(404).json({ error: 'Không tìm thấy giày' });
      }

      // Cập nhật thông tin giày
      const updated_shoe = await Shoe.findByIdAndUpdate(shoeId, body, {
        new: true,
      });

      return res.status(200).json(updated_shoe);
    } catch (error) {
      return res.status(500).json({ error: 'Đã xảy ra lỗi khi cập nhật giày' });
    }
  },

  deleteShoe: async (req, res) => {
    try {
      const shoeId = req.params.id;

      // Kiểm tra xem giày có tồn tại trong CSDL hay không
      const existingShoe = await Shoe.findById(shoeId);
      if (!existingShoe) {
        return res.status(404).json({ error: 'Không tìm thấy giày' });
      }

      // Xóa giày
      await Shoe.findByIdAndDelete(shoeId);

      return res.status(200).json({ message: 'Xóa giày thành công' });
    } catch (error) {
      return res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa giày' });
    }
  },
};
