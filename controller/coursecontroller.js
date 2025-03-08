import Course from '../models/coursemodel.js'

const coursecontroller = {
    //All--------------------------------------
    async getAllCourse(req, res) {

        try {
         let allcoursesdata = await Course.find({});
         res.json(allcoursesdata)
      }
      catch(err) {
        res.status(500).json({message:err.message})
      }
    },

    //id---------------------------------------
    async getCourseid(req, res) {
        try{
           let coursesid = await Course.findById(req.params.cid);
           res.json(coursesid)
        }
        catch(err) {
            res.status(500).json({message:err.message});
        }
    },

    //create---------------------------------------
        async createCourses(req, res) {
        try{
           let course = new Course(req.body);
           await course.save();
           res.json(course)
        }
        catch(err) {
            res.status(500).json({message:err.message});
        }
    },

    //update---------------------------------------
    async updateCourse(req, res) {
        try{
            let updatecourse = await Course.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.json(updatecourse)
        }
        catch(err) {
            res.status(500).json({message:err.message});
        }
    },
    
    //delete---------------------------------------
  async deleteCourse(req, res) {
      try{
         let deletecourse = await Course.findByIdAndDelete(req.params.id);
         res.json(deletecourse)
      }
      catch(err) {
          res.status(500).json({message:err.message});
      }
  },


    
}

export default coursecontroller;