import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';


export default function ChatPage() {
    const [mensagem, setMensagem] = React.useState("");
    const [listMensagem, setlistMensagem] = React.useState([])

    function handleNovaMensagem(msg) {
        if(msg){
            const mensagem = {
                de: "alison",
                id: listMensagem.length + 1,
                texto: msg
            }
            
            setlistMensagem([mensagem , ...listMensagem])
            setMensagem("");
        }
    }
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://images4.alphacoders.com/975/thumb-1920-975294.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listMensagem} setlistMensagem={setlistMensagem} />

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}

                            placeholder="Insira sua mensagem aqui..."
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    handleNovaMensagem(mensagem);
                                }


                            }}
                            onChange={(e) => {
                                const valor = e.target.value;
                                setMensagem(valor);
                            }}
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        <Button 
                            label="OK"
                            onClick={(e)=>{
                                handleNovaMensagem(mensagem)
                            }}  
                            styleSheet={{
                                position:"absolute",
                                right: "30px",
                                width: '10%',
                                border: '1px solid '+ appConfig.theme.colors.neutrals[200],
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                            
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {

    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: "scroll",
                overflowX: "hidden",
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >

            {props.mensagens.map((mensagem) => {
               
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        
                        <Box
                            styleSheet={{
                                display: "flex",
                                position: "relative",
                                alignItems: "center",
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/superalison.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                            <Text 
                                onClick={(e)=>{
                                    mensagem.id = 0;
                                    props.setlistMensagem(  props.mensagens.filter((m)=>{
                                        return m.id > 0;
                                    }) )

                                }}
                                styleSheet={{
                                    position: "absolute",
                                    right: "3%",
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    padding: "2px",
                                    hover: {
                                        backgroundColor: "red"                                        
                                    },
                                    boxShadow: "1px 1px 2px rgb( 0 0 0),-1px -1px 2px rgb( 0 0 0)",
                                    color: appConfig.theme.colors.neutrals[300]
                                    
                                }}>
                                X
                            </Text>
                        </Box>
                        {mensagem.texto}
                    </Text>
                    
                    )
            })}
        </Box>
    )
}