import Student from "../../models/student";

export const findAll = async (req, res) => {
  try {
    const students = await Student.find();
    res.json({
      ok: true,
      data: students,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { body } = req;
    const user = new Student(body);
    user.save();

    res.json({
      ok: true,
      data: user,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const studentId =req.params.id;
    const studentUpdate = await Student.findByIdAndUpdate(studentId,req.body, {
      new: true,
    });

    res.json({
      ok: true,
      data: studentUpdate,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const remove = async(req,res) => {
  try{
      const { id } = req.params;
      const deleteStudent = await Student.findByIdAndDelete(id)
      res.json({
          ok:true,
          data:"Personaje eliminado"
      })

  }catch(error){
      res.json({
          ok:false,
          data:error.message
      });
  }
}
