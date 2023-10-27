const express = require('express')
const {Task,Table1,Table2,Table3,Table4} = require('../models/models')
const router = express.Router()

router.get('/TableData/:monitorId' , async(req,res) => {
    try{
        console.log('---------------',req.params.monitorId)
       const data =await Task.find({Table:req.params.monitorId.toLocaleLowerCase()})
       console.log(data)
        res.send(data)
    }catch(error){
        res.send({statusCode:500, message:error.message})
    }
})

router.post('/',(req,res) => {
    const task = new Task(req.body)
    task.save((err,doc) => {
        if(err) console.log(err)
        res.json(doc)
    })
})

router.put('/:id',(req,res) => {
    Task.findOneAndUpdate({
        _id : req.params.id
    },req.body,{
        new : true
    },(err,doc) => {
        if(err) console.log(err)
        res.json(doc)
    })
})
router.post('/',(req,res)=>{
    Task.create(req.body)
})

router.delete('/:id',(req,res) => {
    console.log(req.params)
    Task.findByIdAndDelete(req.params.id,(err,doc) => {
        if(err) console.log(err)
        res.json(doc)
    })
})
router.post("/:Table", async (req, res) => {
    const Table = req.params.Table;
    const record = req.body;
  
    try {
      let newRecord;
  
      switch (Table) {
        case "Table1":
          newRecord = await Table1.create(record);
          break;
        case "Table2":
          newRecord = await Table2.create(record);
          break;
        default:
          throw new Error(`Table ${Table} does not exist`);
      }
  
      console.log("Record created successfully!", newRecord);
      res.send("Record created successfully!");
    } catch (err) {
      console.error("Failed to create record:", err);
      res.status(500).send("Failed to create record");
    }
  });

  // API endpoint for reading data from a Table
router.get("/:Table", async (req, res) => {
    const Table = req.params.Table;
  console.log(Table)
    try {
      let records;
  
      switch (Table) {
        case "tasks":
          records = await Table3.find();
          break;
        case "Table2":
          records = await Table2.find();
          console.log('-----------',records)
          break;
        default:
          throw new Error(`Table ${Table} does not exist`);
      }
  
      console.log("Records retrieved successfully!", records);
      res.json(records);
    } catch (err) {
      console.error("Failed to retrieve records:", err);
      res.status(500).send("Failed to retrieve records");
    }
  });

module.exports = router