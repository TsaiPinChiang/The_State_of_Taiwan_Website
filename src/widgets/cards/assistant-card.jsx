import PropTypes from "prop-types";
import React from "react";
import { Fragment, useState } from "react";
import {
  Button,
  Card,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { useTranslation, Trans } from "react-i18next";

 
export function AssistantCard({ img, name, position, socials, intro, facility }) {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
  return (
    <Card className="w-full" color="transparent" shadow={false}>
    <CardHeader floated={false} color="transparent" shadow={false} className="mx-0 flex place-content-center">
      <img src={img} className="h-40 w-40 rounded-full" />
    </CardHeader>
    <CardBody className="text-center ">
      <Typography variant="h6" className="mb-2 text-blue-gray-800" >
        {name}
      </Typography>
      <Typography className="font-medium text-blue-gray-400" textGradient>
        {position}
      </Typography>
    </CardBody>
    <CardFooter className="flex justify-center gap-7 pt-2">
    <Fragment>
      <div className="mt-0">
        <Button onClick={handleOpen} color="blue-gray" className="rounded-full">
            <Trans i18nKey="Home人物簡介">
                人物簡介
            </Trans>
        </Button>
      </div>
      <Dialog open={open} handler={handleOpen}  as="div" >
        <DialogHeader>{name}</DialogHeader>
        <DialogBody divider className="p-4 overflow-y-auto">
        <div className="mb-2 flex items-center justify-between gap-4"></div>
        <div className=" inset-20 h-max-80 overflow-y-auto">
            <Typography variant="small" color="gray" className="font-normal whitespace-pre-line">
                {intro}
            </Typography>
        </div>
        <div className="mt-6 flex items-center gap-8 border-t border-blue-gray-50 pt-4">
          <Typography
            as="a"
            variant="small"
            color="gray"
            className="flex items-center gap-1 text-xs font-normal"
          >
            <BuildingOffice2Icon
              strokeWidth={2}
              className="-mt-0.5 h-3.5 w-3.5"
            />
            {facility}
          </Typography>
        </div>
        </DialogBody>
        <DialogFooter>
          {/* <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>關閉</span>
          </Button> */}
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>{t('Button關閉')}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
    </CardFooter>
  </Card>
    
  );
}

AssistantCard.defaultProps = {
  position: "",
  socials: null,
};

AssistantCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

AssistantCard.displayName = "/src/widgets/layout/assistant-card.jsx";

export default AssistantCard;
