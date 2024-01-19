const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../schemas/admin");
const { adminSignup } = require("../controller/admin");
const router = Router();
// - POST /admin/signup
//   Description: Creates a new admin account.
//   Input Body: { username: 'admin', password: 'pass' }
//   Output: { message: 'Admin created successfully' }


// Admin Routes
router.post('/signup',adminSignup);

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});


module.exports = router;