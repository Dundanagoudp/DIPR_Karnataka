import React, { useContext } from "react";
import { Container, Title, Paragraph } from "../aboutustexts/AboutUstextpage.styles";
import { FontSizeContext } from "../../../../context/FontSizeProvider";

const AboutUsText = () => {
    const { fontSize = 100 } = useContext(FontSizeContext);

    return (
        <Container>
            {/* Apply fontSize only if it's explicitly set, otherwise use theme's default */}
            <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                Lorem ipsum odor amet, consectetur adipiscing elit.
            </Title>
            <Paragraph style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                Interdum faucibus integer ultrices sed mollis id. Praesent malesuada turpis sodales at litora tempor. Nostra 
                himenaeos cubilia condimentum mauris dolor facilisi. Dictumst netus ac potenti hendrerit id netus maximus enim 
                etiam? Erat hac nostra nunc ultricies odio natoque. Pretium sed vivamus primis placerat sit amet. Himenaeos cras 
                eu felis phasellus a vivamus ultrices pulvinar. Maecenas tempor vitae erat diam torquent varius.
            </Paragraph>
            <Paragraph style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                Faucibus ullamcorper nullam posuere vulputate aliquet iaculis. Praesent interdum eu phasellus ante vitae ullamcorper 
                habitant cursus cras. Nullam non neque consequat cras et fusce parturient fringilla molestie adipiscing iaculis felis 
                efficitur torquent finibus? Curae dis ipsum imperdiet sem pretium. Nec taciti orci vel commodo consectetuer id vulputate 
                interdum.
            </Paragraph>
            <Paragraph style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
                Turpis velit efficitur magna ex ligula iaculis sed enim. Consequat id eros justo molestie lectus penatibus. Sem potenti 
                cursus odio senectus varius curae. Potenti ullamcorper auctor nulla egestas etiam eget nullam turpis ac. Vehicula nisi 
                urna tempor maximus est pharetra sagittis. Aptent convallis hac parturient accumsan, arcu aptent venenatis. Scelerisque 
                ultrices et velit per nisi maecenas.
            </Paragraph>
        </Container>
    );
};

export default AboutUsText;