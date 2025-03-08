import {Router} from 'express'

import coursecontroller from '../controller/coursecontroller.js'
import adminmiddleware from '../middleware/adminmiddleware.js'

const router = Router()

router.get('/', coursecontroller.getAllCourse)
router.get('/:cid', coursecontroller.getCourseid)

router.post('/', coursecontroller.createCourses)
router.put('/:id',adminmiddleware, coursecontroller.updateCourse)
router.delete('/:id',adminmiddleware, coursecontroller.deleteCourse)


export default router;