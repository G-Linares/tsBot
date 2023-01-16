import { SlashCommandBuilder } from "discord.js";
import { command } from "../../utils";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPEN_IA_KEY
});

const openai = new OpenAIApi(configuration);

const meta = new SlashCommandBuilder()
  .setName("image")
  .setDescription(" Escribe un texto y crea una imagen con OpenIA.")
  .addStringOption((option) =>
    option
      .setName("descripcion")
      .setDescription(
        "Escribe la descripción con la que OpenIA cree la imagen."
      )
      .setMinLength(1)
      .setMaxLength(2000)
      .setRequired(true)
  );

export default command(meta, async ({ interaction }) => {
  const message = interaction.options.getString("descripcion");
  await interaction.deferReply({ ephemeral: true });

  const res: any = await openai.createImage({
    prompt: message ?? "",
    n: 1,
    size: "512x512"
  });
  const imageUrl = res.data.data[0].url;
  await interaction.editReply({
    content: imageUrl
  });
});
