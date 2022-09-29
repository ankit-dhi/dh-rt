import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Button,
  List,
  Input,
  Line,
} from "components";

const HotelsPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/resultspage");
  }
  function handleNavigate8() {
    navigate("/homepage");
  }

  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Img
              src="images/img_combinedshape.png"
              className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[12%]"
              alt="CombinedShape"
            />
            <Text
              className="common-pointer cursor-pointer hover:font-normal font-normal lg:ml-[574px] xl:ml-[656px] 2xl:ml-[738px] 3xl:ml-[886px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] hover:text-blue_800 text-gray_800 w-[auto]"
              onClick={handleNavigate8}
            >
              Explore
            </Text>
            <Text
              className="common-pointer cursor-pointer hover:font-normal font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] hover:text-blue_800 text-gray_800 w-[auto]"
              onClick={handleNavigate1}
            >
              Search
            </Text>
            <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
              Hotels
            </Text>
            <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] hover:text-blue_800 text-gray_800 w-[auto]">
              Offers
            </Text>
            <Img
              src="images/img_notification.svg"
              className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] w-[1%]"
              alt="notification"
            />
            <Img
              src="images/img_unsplashd1upki.png"
              className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
              alt="unsplashd1UPki"
            />
          </Row>
        </header>
        <Stack className="bg-gradient  font-baloobhai lg:h-[151px] xl:h-[172px] 2xl:h-[194px] 3xl:h-[232px] w-[100%]">
          <Img
            src="images/img_bannerbackgrou.png"
            className="absolute lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] w-[100%]"
            alt="BannerBackgrou"
          />
          <Column className="absolute h-[max-content] inset-y-[0] left-[6%] my-[auto] w-[28%]">
            <Text className="font-normal not-italic lg:text-[32px] xl:text-[37px] 2xl:text-[42px] 3xl:text-[50px] text-white_A700 tracking-ls1 w-[auto]">
              Stays in Los Angeles
            </Text>
            <Row className="font-roboto items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[87%]">
              <Button
                className="capitalize font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[45%]"
                shape="RoundedBorder20"
                size="sm"
                variant="OutlineWhiteA700"
              >
                Recommended
              </Button>
              <Button
                className="capitalize font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[24%]"
                shape="RoundedBorder20"
                size="sm"
                variant="OutlineWhiteA7001_2"
              >
                Price
              </Button>
              <Button
                className="capitalize font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[27%]"
                shape="RoundedBorder20"
                size="sm"
                variant="OutlineWhiteA7001_2"
              >
                Rating
              </Button>
            </Row>
          </Column>
        </Stack>
        <Row className="font-roboto lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] pr-[1px] py-[1px] w-[89%]">
          <Text className="font-medium mb-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 tracking-ls1 uppercase w-[auto]">
            200+ results
          </Text>
          <Text className="font-normal 2xl:ml-[1068px] 3xl:ml-[1282px] lg:ml-[830px] xl:ml-[950px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
            Filters
          </Text>
          <Img
            src="images/img_settings.svg"
            className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[2px] w-[1%]"
            alt="settings"
          />
        </Row>
        <Row className="font-roboto items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[89%]">
          <List className="gap-[0] min-h-[auto] w-[44%]" orientation="vertical">
            <Row className="bg-blue_800_0c items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pb-[1px] pr-[1px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_resultsimage.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0] w-[46%]"
                alt="ResultsImage"
              />
              <Column className="2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] w-[49%]">
                <Row className="justify-evenly w-[100%]">
                  <Column className="w-[92%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                      1 king bed standard
                    </Text>
                    <Text className="capitalize font-bold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 tracking-ls1 w-[auto]">
                      Holiday Inn Expre...
                    </Text>
                    <Row className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[69%]">
                      <Img
                        src="images/img_star.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[9%]"
                        alt="star"
                      />
                      <Text className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                        4.7
                      </Text>
                      <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_800 tracking-ls1 w-[auto]">
                        (1,136 reviews)
                      </Text>
                    </Row>
                  </Column>
                  <Img
                    src="images/img_play.svg"
                    className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mt-[1px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                    alt="play"
                  />
                </Row>
                <Row className="items-end lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[41%]">
                  <Text className="capitalize font-bold lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 tracking-ls1 w-[auto]">
                    $S 286
                  </Text>
                  <Text className="font-normal mb-[2px] ml-[1px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[auto]">
                    /night
                  </Text>
                </Row>
                <Button
                  className="font-medium ml-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[60%]"
                  variant="FillBlue800"
                >
                  View Details
                </Button>
              </Column>
            </Row>
            <Row className="bg-blue_800_0c items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pb-[1px] pr-[1px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_resultsimage_220X260.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0] w-[46%]"
                alt="ResultsImage One"
              />
              <Column className="2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] pb-[1px] pr-[1px] w-[49%]">
                <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                  Bed in Quad
                </Text>
                <Text className="capitalize font-bold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 tracking-ls1 w-[auto]">
                  Freehand Los Angeles
                </Text>
                <Row className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                  <Img
                    src="images/img_star.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[10%]"
                    alt="star One"
                  />
                  <Text className="font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                    4.2
                  </Text>
                  <Text className="font-normal lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_800 tracking-ls1 w-[auto]">
                    (1,941 reviews)
                  </Text>
                </Row>
                <Row className="items-end lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[41%]">
                  <Text className="capitalize font-bold lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 tracking-ls1 w-[auto]">
                    $S 198
                  </Text>
                  <Text className="font-normal mb-[2px] ml-[1px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[auto]">
                    /night
                  </Text>
                </Row>
                <Button
                  className="font-medium ml-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[60%]"
                  variant="FillBlue800"
                >
                  View Details
                </Button>
              </Column>
            </Row>
            <Row className="bg-blue_800_0c items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pb-[1px] pr-[1px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_resultsimage_1.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0] w-[46%]"
                alt="ResultsImage Two"
              />
              <Column className="2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] pr-[3px] pt-[3px] w-[49%]">
                <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                  1 King, City view
                </Text>
                <Text className="capitalize font-bold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 tracking-ls1 w-[auto]">
                  The Westin Bonavent...
                </Text>
                <Row className="lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[67%]">
                  <Img
                    src="images/img_star.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[10%]"
                    alt="star Two"
                  />
                  <Text className="font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                    4.1
                  </Text>
                  <Text className="font-normal lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_800 tracking-ls1 w-[auto]">
                    (1,002 reviews)
                  </Text>
                </Row>
                <Row className="items-end lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[41%]">
                  <Text className="capitalize font-bold lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 tracking-ls1 w-[auto]">
                    $S 289
                  </Text>
                  <Text className="font-normal mb-[2px] ml-[1px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[auto]">
                    /night
                  </Text>
                </Row>
                <Button
                  className="font-medium ml-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[61%]"
                  variant="FillBlue800"
                >
                  View Details
                </Button>
              </Column>
            </Row>
            <Row className="bg-blue_800_0c items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] pb-[1px] pr-[1px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_resultsimage_2.png"
                className="lg:h-[172px] xl:h-[196px] 2xl:h-[221px] 3xl:h-[265px] rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0] w-[46%]"
                alt="ResultsImage Three"
              />
              <Column className="2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] pb-[1px] pr-[1px] w-[49%]">
                <Row className="justify-evenly w-[100%]">
                  <Column className="w-[92%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                      Deluxe King
                    </Text>
                    <Text className="capitalize font-bold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 tracking-ls1 w-[auto]">
                      The Ritz-Carlton, L...
                    </Text>
                    <Row className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[69%]">
                      <Img
                        src="images/img_star.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[9%]"
                        alt="star Three"
                      />
                      <Text className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                        4.7
                      </Text>
                      <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_800 tracking-ls1 w-[auto]">
                        (1,136 reviews)
                      </Text>
                    </Row>
                  </Column>
                  <Img
                    src="images/img_play.svg"
                    className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mt-[1px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                    alt="play One"
                  />
                </Row>
                <Row className="items-end lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[41%]">
                  <Text className="capitalize font-bold lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 tracking-ls1 w-[auto]">
                    $S 286
                  </Text>
                  <Text className="font-normal mb-[2px] ml-[1px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[auto]">
                    /night
                  </Text>
                </Row>
                <Button
                  className="font-medium ml-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[60%]"
                  variant="FillBlue800"
                >
                  View Details
                </Button>
              </Column>
            </Row>
          </List>
          <Column
            className="bg-cover bg-repeat lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius10 w-[54%]"
            style={{ backgroundImage: "url('images/img_map_917X695.png')" }}
          >
            <Img
              src="images/img_dots.svg"
              className="lg:h-[391px] xl:h-[447px] 2xl:h-[503px] 3xl:h-[603px] 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] lg:mr-[116px] xl:mr-[133px] 2xl:mr-[150px] 3xl:mr-[180px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius10 w-[62%]"
              alt="Dots"
            />
            <Img
              src="images/img_volume.svg"
              className="lg:h-[57px] xl:h-[65px] 2xl:h-[74px] 3xl:h-[88px] lg:ml-[484px] xl:ml-[554px] 2xl:ml-[623px] 3xl:ml-[748px] mr-[1px] lg:mt-[188px] xl:mt-[215px] 2xl:mt-[242px] 3xl:mt-[290px] rounded-radius10 w-[6%]"
              alt="volume"
            />
          </Column>
        </Row>
        <footer className="font-roboto lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
          <Column className="items-center w-[100%]">
            <Column
              className="bg-cover bg-gray_100 bg-repeat items-center justify-end lg:p-[48px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] w-[100%]"
              style={{
                backgroundImage: "url('images/img_newsletterform.png')",
              }}
            >
              <Text className="font-bold 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_801 tracking-ls1 uppercase w-[auto]">
                subscribe to our newsletter
              </Text>
              <Text className="font-bold lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_801 w-[auto]">
                Get weekly updates
              </Text>
              <Column className="bg-white_A700 border border-gray_201 border-solid justify-end lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[21px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius12 shadow-bs w-[39%]">
                <Text className="font-normal ml-[2px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  Fill in your details to join the party!
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-black_900_99 text-black_900_99 tracking-ls1 w-[100%]"
                  wrapClassName="2xl:mt-[23px] 3xl:mt-[27px] lg:mt-[17px] ml-[2px] w-[99%] xl:mt-[20px]"
                  type="text"
                  name="Input"
                  placeholder="Your name"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-black_900_99 text-black_900_99 tracking-ls1 w-[100%]"
                  wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] ml-[2px] w-[99%] xl:mt-[8px]"
                  type="email"
                  name="Input One"
                  placeholder="Email address"
                ></Input>
                <Button
                  className="font-medium ml-[2px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[36%]"
                  size="lg"
                >
                  submit
                </Button>
              </Column>
            </Column>
            <Row className="bg-gradient1  lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] w-[100%]">
              <Column className="lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] mt-[1px] pb-[1px] pr-[1px] w-[46%]">
                <Img
                  src="images/img_combinedshape_white_A700.svg"
                  className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] w-[27%]"
                  alt="CombinedShape One"
                />
                <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[27px] 3xl:leading-[32px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[90%]">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </Text>
                <Img
                  src="images/img_socialicons.svg"
                  className="lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[20%]"
                  alt="SocialIcons"
                />
              </Column>
              <Line className="bg-white_A700_33 lg:h-[122px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] mb-[2px] w-[1px]" />
              <Column className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[11%]">
                <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                  Company
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  About Us
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  News
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Careers
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  How we work
                </Text>
              </Column>
              <Column className="lg:h-[120px] xl:h-[137px] 2xl:h-[155px] 3xl:h-[185px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[119px] xl:w-[136px] 2xl:w-[154px] 3xl:w-[184px]">
                <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                  Support
                </Text>
                <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Account
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Support Center
                </Text>
                <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  FAQ
                </Text>
                <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Accessibility
                </Text>
              </Column>
              <Column className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] mt-[2px] w-[9%]">
                <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                  More
                </Text>
                <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Covid Advisory
                </Text>
                <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Airline Fees
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Tips
                </Text>
                <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Quarantine Rules
                </Text>
              </Column>
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HotelsPagePage;
