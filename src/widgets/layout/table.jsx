import { useState } from "react";
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Tooltip,
  Input,
  Tabs,
  Tab,
  TabsHeader,
} from "@material-tailwind/react";

const TABLE_HEAD = ["時間", "內容", "英文內容", "標籤", "分類", "編輯"];
  
export function Table({ eventList }) {
    const [selectedEventId, setSelectedEventId] = useState(0)
    const [isEditing, setIsEditing] = useState(false);

    const clickEdit = (id) =>
    {
        setSelectedEventId(id)
        setIsEditing(!isEditing);
        console.log('selectedId', id)
    }
    
    const showInput = (event) =>
        {
            if(selectedEventId === event.id){
                return(
                    <Input color="blue" label="Input Blue" />
                )
            }else{
                return(                                        
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        {event.content}
                    </Typography>)
            }
        };

    return (
    <Card className="overflow-scroll h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                歷史事件
              </Typography>

              <Tabs value="all" className="w-full md:w-max">
                <TabsHeader>
                    <Tab key={1} value={"國內"}>
                        國內
                    </Tab>
                    <Tab key={2} value={"國內"}>
                        國外
                    </Tab>
                </TabsHeader>
            </Tabs>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
              </div>
              {/* <Button className="flex items-center gap-3" color="blue" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
              </Button> */}
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {eventList.map(
                (event, index) => {
                  const isLast = index === eventList.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
   
                  return (
                    <tr key={event.id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Typography variant="small" color="blue-gray" className="font-bold">
                            {event.time}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="overflow-y-auto p-2 w-80">
                            {event.content}
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="overflow-y-auto p-2 w-80">
                            {event.content_eng}
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-40">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                            {event.tags}
                            </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={event.category}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton onClick={() => clickEdit(event.id)} variant="text" color="blue-gray">
                            {
                                (isEditing && selectedEventId == event.id)? <XMarkIcon className="h-4 w-4" />:
                                <PencilIcon className="h-4 w-4" />
                            }
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        </CardFooter>
      </Card>

     
    );
  }

export default Table;